import { Animations } from "../../Animations";
import { Camera } from "../../Camera";
import { events } from "../../Events";
import { FrameIndexPattern } from "../../FrameIndexPattern";
import { GameObject } from "../../GameObject";
import { resources } from "../../Resource";
import { Sprite } from "../../Sprite";
import { Vector2 } from "../../Vector2";
import GameState from "../State/GameState";
import { ANIMATE_BLUR_FOR_MOOD } from "./BlurAnimation";

export class MoodAbility extends GameObject{
    constructor(x, y) {
        super({
            position: new Vector2(x, y)
        });
        const sprite = new Sprite({
            resource: resources.images.mushroomOfMood,
            position: new Vector2(0, -4)
        })
        this.addChild(sprite)

        this.blur = new Sprite({
            position: new Vector2(x - 272, y - 160),
            resource: resources.images.blur,
            frameSize: new Vector2(544, 320),
            hFrames: 10,
            vFrames: 1,
            animations: new Animations({
                animate: new FrameIndexPattern(ANIMATE_BLUR_FOR_MOOD)
            })
        })
        
    }

    ready() {
        events.on("HERO_POSITION", this, pos => {
            const roundedHeroX = Math.round(pos.x);
            const roundedHeroY = Math.round(pos.y);
            if (roundedHeroX === this.position.x && roundedHeroY === this.position.y) {
                this.onCollideWithHero();
            }
        })
    }

    onCollideWithHero() {
        this.destroy()

        GameState.adjustSanity();

        if (GameState.sanity !== 10) {
            this.parent.parent.addChild(this.blur);
        }
        GameState.setSpeed(2)

        const updateBlurPosition = (pos) => {
            this.blur.position = new Vector2(pos.x - 272, pos.y - 160);
        };

        events.on("HERO_POSITION", this, updateBlurPosition);

        setTimeout(() => {
            this.parent.parent.removeChild(this.blur);
            GameState.setSpeed(1)
        }, 10000)
    }

}