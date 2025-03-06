import { GameObject } from "../../GameObject";
import { resources } from "../../Resource";
import { Sprite } from "../../Sprite";
import { Vector2 } from "../../Vector2";

export class TextBox extends GameObject {
    constructor() {
        super({
            position: new Vector2(32, 112)
        });
        this.content = "Hi. How are you? Hi. How are you?"
        this.backdrop = new Sprite({
            resource: resources.images.textBox,
            frameSize: new Vector2(256, 64)
        })

    }

    drawImage(ctx, drawPosX, drawPosY) {
        this.backdrop.drawImage(ctx, drawPosX, drawPosY)

        ctx.font = "12px fontRetroGaming";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillStyle = "#fff";

        const MAX_WIDTH = 250;
        const LINE_WEIGHT = 20;
        const PADDING_LEFT = 10;
        const PADDING_TOP = 12;

        let words = this.content.split(" ");
        let line = "";

        for (let n = 0; n < words.length; n++) {
            let testline = line + words[n] + " ";
            let metrics = ctx.measureText(testline);
            let testWidth = metrics.width;

            if (testWidth > MAX_WIDTH && n > 0) {
                ctx.fillText(line, drawPosX + PADDING_LEFT, drawPosY + PADDING_TOP);
                line = words[n] + " ";
                drawPosY += LINE_WEIGHT;
            } else {
                line = testline;
            }
        }

        ctx.fillText(line, drawPosX+PADDING_LEFT, drawPosY+PADDING_TOP);
    }

}