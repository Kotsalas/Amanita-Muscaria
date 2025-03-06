import { Animations } from "../../Animations";
import { events } from "../../Events";
import { FrameIndexPattern } from "../../FrameIndexPattern";
import { GameObject } from "../../GameObject";
import { resources } from "../../Resource";
import { Sprite } from "../../Sprite";
import { Vector2 } from "../../Vector2";
import { ANIMATE_LOAD_SCREEN } from "./loadScreenAnimations";

export class loadScreen extends GameObject {
    constructor(x, y) {
        super({
            position: new Vector2(x, y)
        });
        this.sprite = new Sprite({
            resource: resources.images.loadScreen,
            frameSize: new Vector2(320, 180),
            hFrames: 12,
            vFrames: 1,
            position: new Vector2(56, -2),
            animations: new Animations({
                animate: new FrameIndexPattern(ANIMATE_LOAD_SCREEN)
            })
        })
        this.addChild(this.sprite);
    }

    step() {
        this.sprite.animations.play("animate")
    }
}