import { Hero } from "./objects/Hero/Hero.js";
import { Level } from "./objects/Level/Level.js";
import { resources } from "./Resource.js";
import { Sprite } from "./Sprite.js";
import { Vector2 } from "./Vector2.js";

export class DeathScreen extends Level {
    constructor(params={}) {
        super({});
        
        const hero = new Hero(params.heroPosition.x, params.heroPosition.x);
        this.addChild(hero);

        this.sprite = new Sprite({
            resource: resources.images.loadScreen,
            frameSize: new Vector2(3520, 180),
            position: new Vector2(-3352, -82)
        })
        this.addChild(this.sprite);
        
    }

    step() {
    }

    ready() {
    }

}
