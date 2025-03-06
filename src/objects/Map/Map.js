import { Animations } from "../../Animations";
import { FrameIndexPattern } from "../../FrameIndexPattern";
import { GameObject } from "../../GameObject";
import { Sprite } from "../../Sprite";
import { Vector2 } from "../../Vector2";
import { ANIMATE_MAP } from "./mapAnimations";

export class Map extends GameObject {
    constructor(x, y, frameSizeX, frameSizeY, resource) {
        super({
            position: new Vector2(x, y)
        });
        this.sprite = new Sprite({
            resource: resource,
            frameSize: new Vector2(frameSizeX, frameSizeY),
            hFrames: 3,
            vFrames: 1,
            position: new Vector2(0, 0),
            animations: new Animations({
                animate: new FrameIndexPattern(ANIMATE_MAP)
            })
        })
        this.addChild(this.sprite);
    }

    step() {

        if(this.isLocked === true) {
            return;
        }

        this.sprite.animations.play("animate")

    }
}