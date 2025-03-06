import { events } from "../Events";
import { gridCells } from "../helpers/grid";
import { Entrance } from "../objects/Entrance/Entrance";
import { Exit } from "../objects/Exit/Exit";
import { Hero } from "../objects/Hero/Hero";
import { Level } from "../objects/Level/Level";
import { Npc } from "../objects/Npc/Npc";
import { Rod } from "../objects/Rod/Rod";
import { resources } from "../Resource";
import { Sprite } from "../Sprite";
import { Vector2 } from "../Vector2";
import { CaveLevel1 } from "./CaveLevel1";
import { OutdoorLevel1 } from "./OutdoorLevel1";
import GameState from "../objects/State/GameState"
import { loadScreen } from "../objects/loadScreen/loadScreen";
import { Map } from "../objects/Map/Map";
import { MoodAbility } from "../objects/Abilities/MoodAbility";
import { addPerceptionWallsCaveLevel2, addWallsCaveLevel2 } from "../data/walls";
import { PerceptionAbility } from "../objects/Abilities/PerceptionAbility";
import { TALKED_TO_CHILL_MUSHROOM } from "../StoryFlags";
import { SwampBorder } from "../objects/Border/SwampBorder";

const DEFAULT_HERO_POSITION = new Vector2(gridCells(/*20*/5), gridCells(/*-5*/47));

export class CaveLevel2 extends Level {
    constructor(params={}) {
        super({});
        
        const map = new Map(gridCells(-33), gridCells(-16), 1200, 1200, resources.images.swampMap1);
        this.addChild(map);

        const border = new SwampBorder(gridCells(-33), gridCells(59));
        this.addChild(border)

        const entrance = new Entrance(gridCells(6), gridCells(47));
        this.addChild(entrance);

        const exit = new Exit(gridCells(21), gridCells(-5));
        this.addChild(exit);

        this.heroStartPosition = params.heroPosition ?? DEFAULT_HERO_POSITION;
        const hero = new Hero(this.heroStartPosition.x, this.heroStartPosition.y);
        this.addChild(hero);

        const rod3 = new Rod(gridCells(-17), gridCells(39), 3);
        this.addChild(rod3);
        const rod4 = new Rod(gridCells(16), gridCells(47), 4);
        this.addChild(rod4);
        const rod5 = new Rod(gridCells(22), gridCells(39), 5);
        this.addChild(rod5);
        const rod6 = new Rod(gridCells(12), gridCells(22), 6);
        this.addChild(rod6);
        const rod7 = new Rod(gridCells(12), gridCells(31), 7);
        this.addChild(rod7);
        const rod8 = new Rod(gridCells(-6), gridCells(29), 8);
        this.addChild(rod8);
        const rod9 = new Rod(gridCells(-16), gridCells(27), 9);
        this.addChild(rod9);
        const rod10 = new Rod(gridCells(-19), gridCells(11), 10);
        this.addChild(rod10);
        const rod11 = new Rod(gridCells(1), gridCells(8), 11);
        this.addChild(rod11);

        this.walls = new Set();
        addWallsCaveLevel2(this.walls);

        this.loadScreenForEnter = new loadScreen(gridCells(-7), gridCells(42));
        this.loadScreenForExit = new loadScreen(gridCells(8), gridCells(-10));

        this.respawnAbilities();
        setInterval(() => this.respawnAbilities(), 3000);

    }

    respawnAbilities() {
        if (this.ab) this.removeChild(this.ab);
        if (this.ab1) this.removeChild(this.ab1);
        if (this.ab2) this.removeChild(this.ab2);
        if (this.ab3) this.removeChild(this.ab3);
        if (this.ab4) this.removeChild(this.ab4);
        if (this.ab5) this.removeChild(this.ab5);
        if (this.ab6) this.removeChild(this.ab6);
        if (this.ab7) this.removeChild(this.ab7);
        if (this.ab8) this.removeChild(this.ab8);
        if (this.ab9) this.removeChild(this.ab9);
        if (this.ab10) this.removeChild(this.ab10);
        if (this.ab11) this.removeChild(this.ab11);
        if (this.ab12) this.removeChild(this.ab12);
        if (this.ab13) this.removeChild(this.ab13);

        this.ab = new PerceptionAbility(gridCells(2), gridCells(47));
        this.addChild(this.ab);
        this.ab1 = new PerceptionAbility(gridCells(-20), gridCells(45));
        this.addChild(this.ab1);
        this.ab2 = new PerceptionAbility(gridCells(17), gridCells(29));
        this.addChild(this.ab2);
        this.ab3 = new PerceptionAbility(gridCells(-6), gridCells(43));
        this.addChild(this.ab3);
        this.ab4 = new PerceptionAbility(gridCells(20), gridCells(21));
        this.addChild(this.ab4);
        this.ab5 = new PerceptionAbility(gridCells(10), gridCells(23));
        this.addChild(this.ab5);
        this.ab6 = new PerceptionAbility(gridCells(3), gridCells(31));
        this.addChild(this.ab6);
        this.ab7 = new PerceptionAbility(gridCells(-8), gridCells(30));
        this.addChild(this.ab7);
        this.ab8 = new PerceptionAbility(gridCells(-17), gridCells(27));
        this.addChild(this.ab8);
        this.ab9 = new PerceptionAbility(gridCells(1), gridCells(9));
        this.addChild(this.ab9);
        this.ab10 = new PerceptionAbility(gridCells(-9), gridCells(0));
        this.addChild(this.ab10);
        this.ab11 = new PerceptionAbility(gridCells(9), gridCells(4));
        this.addChild(this.ab11);
        this.ab12 = new PerceptionAbility(gridCells(30), gridCells(5));
        this.addChild(this.ab12);
        this.ab13 = new PerceptionAbility(gridCells(23), gridCells(10));
        this.addChild(this.ab13);
    }

    step() {
        if (GameState.isPerceptionActive) {
            this.walls.clear();
            addPerceptionWallsCaveLevel2(this.walls);
        } else {
            this.walls.clear();
            addWallsCaveLevel2(this.walls);
        }
    }
    
    ready() {
        events.on("HERO_EXITS", this, () => {
            this.parent.addChild(this.loadScreenForExit);
            setTimeout(() => {
                events.emit("CHANGE_LEVEL", new CaveLevel2({
                    heroPosition: new Vector2(gridCells(1), gridCells(2)),
                    hasCollectedRod: GameState.hasItem(2)
                }))
                this.parent.removeChild(this.loadScreenForExit)
                GameState.setLocation("new CaveLevel2()");
            }, 600)
        })
        events.on("HERO_ENTERS", this, () => {
            this.parent.addChild(this.loadScreenForEnter);
            setTimeout(() => {
                events.emit("CHANGE_LEVEL", new CaveLevel1({
                    heroPosition: new Vector2(gridCells(-23), gridCells(10)),
                    hasCollectedRod1: GameState.hasItem(1),
                    hasCollectedRod2: GameState.hasItem(2),
                }))
                this.parent.removeChild(this.loadScreenForEnter)
                GameState.setLocation("new CaveLevel1()");
                GameState.setSpeed(1);
            }, 600)
        })
    }

}