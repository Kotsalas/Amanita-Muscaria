import { Camera } from "../../Camera";
import { DeathScreen } from "../../DeathScreen";
import { events } from "../../Events";
import { GameObject } from "../../GameObject";
import { Input } from "../../Input";
import { storyFlags } from "../../StoryFlags";
import { Inventory } from "../Inventory/Inventory";
import { SpriteTextString } from "../SpriteTextString/SpriteTextString";
import GameState from "../State/GameState";

export class Main extends GameObject {
    constructor() {
        super({});
        this.level = null;
        this.input = new Input();
        this.camera = new Camera();
    }

    ready() {

        const inventory = new Inventory();
        this.addChild(inventory);

        events.on("CHANGE_LEVEL", this, newLevelInstance => {
            this.setLevel(newLevelInstance);
        })

        if(GameState.sanity === 10) {
            this.setLevel(new DeathScreen());
        }

        events.on("HERO_REQUESTS_ACTION", this, (withObject) => {

            if (typeof withObject.getContent === "function") {
                const content = withObject.getContent();
        
                if (!content) {
                  return;
                }
        
                console.log(content)
                if (content.addsFlag) {
                  console.log("ADD FLAG", content.addsFlag)
                  storyFlags.add(content.addsFlag);
                }

                const textbox = new SpriteTextString({
                    portraitFrame: content.portraitFrame,
                    string: content.string
                });
                this.addChild(textbox);
                events.emit("START_TEXT_BOX");

                const endingSub = events.on("END_TEXT_BOX", this, () => {
                    textbox.destroy();
                    events.off(endingSub);
                })
            }

        })
    }

    setLevel(newLevelInstance) {
        if (this.level) {
            this.level.destroy();
        }
        this.level = newLevelInstance;
        this.addChild(this.level);
    }

    drawBackground(ctx) {
        this.level?.background?.drawImage(ctx, 0, 0);
    }

    drawObjects(ctx) {
        this.children.forEach(child => {
            if (child.drawLayer !== "HUD") {
                child.draw(ctx, 0, 0);
            }
        })
    }

    drawForeground(ctx) {
        this.children.forEach(child => {
            if (child.drawLayer === "HUD") {
                child.draw(ctx, 0, 0);
            }
        })
    }

    drawLoadScreen(ctx) {
        this.children.forEach(child => {
            if (child.drawLayer === "LOAD_SCREEN") {
                child.draw(ctx, 0, 0)
            }
        })
    }

}