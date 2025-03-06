import { Animations } from "../../../Animations";
import { FrameIndexPattern } from "../../../FrameIndexPattern";
import { GameObject } from "../../../GameObject";
import { resources } from "../../../Resource";
import { Sprite } from "../../../Sprite";
import { Vector2 } from "../../../Vector2";
import { ANIMATE_TREE } from "./treeAnimations";

export class tree1middle extends GameObject {
    constructor(x, y) {
        super({
            position: new Vector2(x, y)
        });
        this.sprite = new Sprite({
            resource: resources.images.tree1Middle,
            frameSize: new Vector2(48, 32),
            hFrames: 3,
            vFrames: 1,
            position: new Vector2(0, -32),
            animations: new Animations({
                animate: new FrameIndexPattern(ANIMATE_TREE)
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