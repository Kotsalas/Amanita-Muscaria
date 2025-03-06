import './style.css';
import {Vector2} from "./Vector2.js";
import {GameLoop} from "./GameLoop.js";
import { Main } from './objects/Main/Main.js';
import { CaveLevel1 } from './levels/CaveLevel1.js';
import { OutdoorLevel1 } from './levels/OutdoorLevel1.js';
import { CaveLevel2 } from './levels/CaveLevel2.js';
import GameState from './objects/State/GameState.js';

const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");

const mainScene = new Main({
    position: new Vector2(0, 0)
})
window.addEventListener("keydown", e => {
    if (e.key === "r") {
        const levelName = eval(GameState.currentLocation);
        if (levelName) {
            const levelInstance = levelName;
            mainScene.setLevel(levelInstance);
          } else {
            console.error("Class not found!");
          }
    }
})
// mainScene.setLevel(new OutdoorLevel1());
// mainScene.setLevel(new CaveLevel1());
mainScene.setLevel(new CaveLevel2());
const update = (delta) => {
    mainScene.stepEntry(delta, mainScene);
    mainScene.input?.update();
};
const draw = () => {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    mainScene.drawBackground(ctx);

    ctx.save();

    if (mainScene.camera) {
        ctx.translate(mainScene.camera.position.x, mainScene.camera.position.y);
    }

    mainScene.drawObjects(ctx);

    ctx.restore();

    mainScene.drawForeground(ctx);

    mainScene.drawLoadScreen(ctx);

}

const gameLoop = new GameLoop(update, draw);
gameLoop.start();