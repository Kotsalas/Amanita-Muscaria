import { Animations } from "../../Animations";
import { events } from "../../Events";
import { FrameIndexPattern } from "../../FrameIndexPattern";
import { GameObject } from "../../GameObject";
import { resources } from "../../Resource";
import { Sprite } from "../../Sprite";
import { storyFlags } from "../../StoryFlags";
import { Vector2 } from "../../Vector2";

export class Npc extends GameObject {
    constructor(x, y, data={}) {
        super({
            position: new Vector2(x, y)
        });

        this.isSolid = true;

        this.textContent = data.content;
        this.textPortraitFrame = data.portraitFrame;

        if (data.shadow) {
            const shadow = new Sprite({
            resource: resources.images.shadow,
            frameSize: new Vector2(32, 32),
            position: new Vector2(-8, -8)
            })
            this.addChild(shadow);
        }

        this.body = new Sprite({
            resource: data.sprite,
            frameSize: new Vector2(32, 32),
            hFrames: 3,
            vFrames: 1,
            position: new Vector2(-8, -8),
            animations: new Animations({
                idle: new FrameIndexPattern({
                    duration: 0,
                    frames: [
                        {time: 0, frame: 0}
                    ]
                }),
                interact: new FrameIndexPattern({
                    duration: 2000,
                    frames: [
                        {
                            time: 0,
                            frame: 1
                        },
                        {
                            time: 1000,
                            frame: 2
                        }
                    ]
                })
            })
        })
        this.addChild(this.body);

        this.body.animations.play("idle");

        events.on("HERO_REQUESTS_ACTION", this, (npc) => {
            if (npc === this) {
                this.body.animations.play("interact");
            }
        });

        events.on("END_TEXT_BOX", this, () => {
            this.body.animations.play("idle");
        });

    }

    getContent() {

        const match = storyFlags.getRelevantScenario(this.textContent);
        if (!match) {
            console.warn("No matches found in this list!", this.textContent);
            return null;
        }

        return {
            portraitFrame: this.textPortraitFrame,
            string: match.string,
            addsFlag: match.addsFlag ?? null
        }
    }

}