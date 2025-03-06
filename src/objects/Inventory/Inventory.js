import { events } from "../../Events";
import { GameObject } from "../../GameObject";
import { resources } from "../../Resource";
import { Sprite } from "../../Sprite";
import { Vector2 } from "../../Vector2";
import GameState from "../State/GameState";

export class Inventory extends GameObject {
    constructor() {
        super({
            position: new Vector2(0, 2)
        });

        this.drawLayer = "HUD";

        this.items = []

        events.on("HERO_PICKS_UP_ITEM", this, data => {
            const item = {
                image: resources.images.rod,
                id: data.id
            }
            this.items.push(item)
            this.renderInventory();
        })

        this.renderInventory();
    }

    step() {
        if (GameState.sanity === 10) {
            this.children.forEach(child => child.destroy())
            return
        }
    }

    renderInventory() {

        if (this.items.length === 5) {
            this.children.forEach(child => child.destroy())
            this.items.length = 0;
            GameState.sanity = 0;
        } else {
        this.children.forEach(child => child.destroy())
        console.log("Crystals: ", this.items.length)

        this.items.forEach((item, index) => {
            const sprite = new Sprite({
                resource: item.image,
                position: new Vector2(index*12, 0),
            });
            this.addChild(sprite);
        })
        }
    }

    removeFromInventory(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.renderInventory();
    }

}