import { GameObject } from "../../GameObject";
import { resources } from "../../Resource";
import { Sprite } from "../../Sprite";
import { Vector2 } from "../../Vector2";

export class SwampBorder extends GameObject {
    constructor(x, y) {
        super({
            position: new Vector2(x, y)
        });
        this.sprite = new Sprite({
            resource: resources.images.swampForest,
            frameSize: new Vector2(1200, 1200),
            position: new Vector2(0, -1200)
        })
        this.addChild(this.sprite);
    }
}