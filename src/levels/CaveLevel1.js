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
import { CaveLevel2 } from "./CaveLevel2";
import { OutdoorLevel1 } from "./OutdoorLevel1";
import GameState from "../objects/State/GameState"
import { loadScreen } from "../objects/loadScreen/loadScreen";
import { Map } from "../objects/Map/Map";
import { MoodAbility } from "../objects/Abilities/MoodAbility";
import { addWallsCaveLevel1 } from "../data/walls";
import { PerceptionAbility } from "../objects/Abilities/PerceptionAbility";
import { TALKED_TO_CHILL_MUSHROOM } from "../StoryFlags";

const DEFAULT_HERO_POSITION = new Vector2(gridCells(3), gridCells(8));

export class CaveLevel1 extends Level {
    constructor(params={}) {
        super({});
        
        const map = new Map(-528, -256, 768, 848, resources.images.outdoorMap2);
        this.addChild(map);

        const entrance = new Entrance(gridCells(3), gridCells(6));
        this.addChild(entrance);

        const exit = new Exit(gridCells(-23), gridCells(11));
        this.addChild(exit);

        this.heroStartPosition = params.heroPosition ?? DEFAULT_HERO_POSITION;
        const hero = new Hero(this.heroStartPosition.x, this.heroStartPosition.y);
        this.addChild(hero);

        // const emptySpaces = [
        //     {
        //         x: 3,
        //         y: 8
        //     }
        // ]

        // const randomEmptySpace = Math.round(Math.random() * (emptySpaces.length - 1));
        
        // const rod = new Rod(gridCells(emptySpaces[randomEmptySpace].x) ,gridCells(emptySpaces[randomEmptySpace].y), 1);
        // if (!params.hasCollectedRod) {
        //     this.addChild(rod);
        // }

        const ab4 = new MoodAbility(gridCells(4), gridCells(8));
        this.addChild(ab4);
        const ab5 = new PerceptionAbility(gridCells(4), gridCells(7));
        this.addChild(ab5);

        const rod1 = new Rod(gridCells(-12), gridCells(13), 1);
        if (!params.hasCollectedRod1) {
            this.addChild(rod1);
        }
        const rod2 = new Rod(gridCells(-8), gridCells(-6), 2);
        if (!params.hasCollectedRod2) {
            this.addChild(rod2);
        }

        const chillMushroom = new Npc(gridCells(-6), gridCells(5), {
            content: [
                {
                    string: "You see that tree? No, you don't! It wasn't there a second ago! Or was it?",
                    requires: [],
                    bypass: [TALKED_TO_CHILL_MUSHROOM],
                    addsFlag: TALKED_TO_CHILL_MUSHROOM
                },
                {
                    string: "Be careful with your thoughts... they might not be yours anymore!",
                    requires: [TALKED_TO_CHILL_MUSHROOM]
                }
            ],
            portraitFrame: 2,
            sprite: resources.images.chillMushroom,
            shadow: false
        });
        this.addChild(chillMushroom);

        this.walls = new Set();
        addWallsCaveLevel1(this.walls);

        this.loadScreenForEnter = new loadScreen(-160, 16);
        this.loadScreenForExit = new loadScreen(-576, 96);

        this.respawnAbilities();
        setInterval(() => this.respawnAbilities(), 60000);

    }

    respawnAbilities() {
        if (this.ab) this.removeChild(this.ab);
        if (this.ab1) this.removeChild(this.ab1);
        if (this.ab2) this.removeChild(this.ab2);
        if (this.ab3) this.removeChild(this.ab3);

        this.ab = new MoodAbility(gridCells(-7), gridCells(-8));
        this.addChild(this.ab);
        this.ab1 = new MoodAbility(gridCells(-16), gridCells(9));
        this.addChild(this.ab1);
        this.ab2 = new MoodAbility(gridCells(-15), gridCells(19));
        this.addChild(this.ab2);
        this.ab3 = new MoodAbility(gridCells(-23), gridCells(27));
        this.addChild(this.ab3);
    }

    step() {
        if (GameState.isPerceptionActive) {
            this.walls.clear();
        } else {
            this.walls.clear();
            addWallsCaveLevel1(this.walls);
        }
    }
    
    ready() {
        events.on("HERO_EXITS", this, () => {
            this.parent.addChild(this.loadScreenForExit);
            setTimeout(() => {
                events.emit("CHANGE_LEVEL", new CaveLevel2({
                    heroPosition: new Vector2(gridCells(5), gridCells(47)),
                    hasCollectedRod: GameState.hasItem(2)
                }))
                this.parent.removeChild(this.loadScreenForExit)
                
                GameState.setLocation("new CaveLevel2()");
            }, 600)
        })
        events.on("HERO_ENTERS", this, () => {
            this.parent.addChild(this.loadScreenForEnter);
            setTimeout(() => {
                events.emit("CHANGE_LEVEL", new OutdoorLevel1({
                    heroPosition: new Vector2(gridCells(4), gridCells(3)),
                    hasCollectedRod0: GameState.hasItem(0),
                }))
                this.parent.removeChild(this.loadScreenForEnter)
                GameState.setLocation("new OutdoorLevel1()");
                GameState.setSpeed(1);
            }, 600)
        })
    }

}