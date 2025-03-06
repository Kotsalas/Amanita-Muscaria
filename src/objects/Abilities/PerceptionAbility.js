import { Animations } from "../../Animations";
import { events } from "../../Events";
import { FrameIndexPattern } from "../../FrameIndexPattern";
import { GameObject } from "../../GameObject";
import { gridCells } from "../../helpers/grid";
import { resources } from "../../Resource";
import { Sprite } from "../../Sprite";
import { Vector2 } from "../../Vector2";
import GameState from "../State/GameState";
import { ANIMATE_BLUR_FOR_PERCEPTION } from "./BlurAnimation";

export class PerceptionAbility extends GameObject{
    constructor(x, y) {
        super({
            position: new Vector2(x, y)
        });
        const sprite = new Sprite({
            resource: resources.images.mushroomOfPerception,
            position: new Vector2(0, -4)
        })
        this.addChild(sprite)

        this.blur = new Sprite({
            position: new Vector2(-112, -80),
            resource: resources.images.blur,
            frameSize: new Vector2(544, 320),
            hFrames: 10,
            vFrames: 1,
            animations: new Animations({
                animate: new FrameIndexPattern(ANIMATE_BLUR_FOR_PERCEPTION)
            })
        })
        
    }

    ready() {
        events.on("HERO_POSITION", this, pos => {
            const roundedHeroX = Math.round(pos.x);
            const roundedHeroY = Math.round(pos.y);
            if (roundedHeroX === this.position.x && roundedHeroY === this.position.y && !GameState.isPerceptionActive) {
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

        GameState.togglePerception(true);
        GameState.setSpeed(1.5);

        const updateBlurPosition = (pos) => {
            this.blur.position = new Vector2(pos.x - 272, pos.y - 160);
        };

        events.on("HERO_POSITION", this, updateBlurPosition);

        setTimeout(() => {
            this.parent.parent.removeChild(this.blur);
        }, 1000)

        setTimeout(() => {
            GameState.togglePerception(false);
            GameState.setSpeed(1);
        },5000)
    }

}