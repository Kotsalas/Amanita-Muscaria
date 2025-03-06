import { events } from "../../Events";
import { GameObject } from "../../GameObject";
import { resources } from "../../Resource";
import { Sprite } from "../../Sprite";
import { Vector2 } from "../../Vector2";

export class Entrance extends GameObject {
    constructor(x, y) {
        super({
            position: new Vector2(x, y)
        });
        this.addChild(new Sprite({
            resource: resources.images.hole
        }))

        this.drawLayer = "FLOOR";
    }

    ready() {
        events.on("HERO_POSITION", this, pos => {
            const roundedHeroX = Math.round(pos.x);
            const roundedHeroY = Math.round(pos.y);
            if (roundedHeroX === this.position.x && roundedHeroY === this.position.y) {
                events.emit("HERO_ENTERS")
            }
        })
    }
}