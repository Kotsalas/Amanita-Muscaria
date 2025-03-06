import { events } from "../Events.js";
import { gridCells } from "../helpers/grid.js";
import { tree1middle } from "../objects/AnimatedObjectOverlays/level1Overlays/tree1middle.js";
import { tree2top } from "../objects/AnimatedObjectOverlays/level1Overlays/tree2top.js";
import { Hero } from "../objects/Hero/Hero.js";
import { Level } from "../objects/Level/Level.js";
import { loadScreen } from "../objects/loadScreen/loadScreen.js";
import { Map } from "../objects/Map/Map.js";
import { Npc } from "../objects/Npc/Npc.js";
import { TALKED_TO_OLD_WISE_MUSHROOM } from "../StoryFlags";
import { Rod } from "../objects/Rod/Rod.js";
import GameState from "../objects/State/GameState.js";
import { resources } from "../Resource.js";
import { Sprite } from "../Sprite.js";
import { Vector2 } from "../Vector2.js";
import { CaveLevel1 } from "./CaveLevel1.js";
import { Exit } from "../objects/Exit/Exit.js";
import { MoodAbility } from "../objects/Abilities/MoodAbility.js";
import { PerceptionAbility } from "../objects/Abilities/PerceptionAbility.js";
import { addWallsOutdoorLevel1 } from "../data/walls.js";

const DEFAULT_HERO_POSITION = new Vector2(gridCells(13), gridCells(5));

export class OutdoorLevel1 extends Level {
    constructor(params={}) {
        super({});

        const map = new Map(-112, -80, 544, 320, resources.images.outdoorMap);
        this.addChild(map);
        
        const exit = new Exit(gridCells(3) ,gridCells(3));
        this.addChild(exit);
        
        this.heroStartPosition = params.heroPosition ?? DEFAULT_HERO_POSITION;
        const hero = new Hero(this.heroStartPosition.x ,this.heroStartPosition.y);
        this.addChild(hero);

        const emptySpaces = [
            {
              x: 15,
              y: 6
            },
            {
              x: 8,
              y: 6
            },
            {
              x: 10,
              y: 2
            },
          ];

        const randomEmptySpace = Math.round(Math.random() * (emptySpaces.length - 1));
        
        const rod = new Rod(gridCells(emptySpaces[randomEmptySpace].x) ,gridCells(emptySpaces[randomEmptySpace].y), 0);
        if (!params.hasCollectedRod0) {
          this.addChild(rod);
        }

        const ability = new MoodAbility(gridCells(5), gridCells(5));
        this.addChild(ability);

        const oldWiseMushroom = new Npc(gridCells(7), gridCells(2), {
            content: [
                {
                    string: "Ahh... young one, you are... different. The forest shifts because it is sick. You... must learn to shift as well.",
                    requires: [],
                    bypass: [TALKED_TO_OLD_WISE_MUSHROOM],
                    addsFlag: TALKED_TO_OLD_WISE_MUSHROOM
                },
                {
                    string: "Your mind will twist, your mood will dance, and your eyes... may deceive you. But do not fear, little cap. Embrace it.",
                    requires: [TALKED_TO_OLD_WISE_MUSHROOM]
                }
            ],
            portraitFrame: 1,
            sprite: resources.images.oldWiseMushroom,
            shadow: false
        });
        this.addChild(oldWiseMushroom);
        // const al = new Npc(gridCells(8), gridCells(2), {
        //     content: [
        //         {
        //             string: "Ahh... young one, you are... different. The forest shifts because it is sick. You... must learn to shift as well.",
        //             requires: [],
        //             bypass: [TALKED_TO_OLD_WISE_MUSHROOM],
        //             addsFlag: TALKED_TO_OLD_WISE_MUSHROOM
        //         },
        //         {
        //             string: "Your mind will twist, your mood will dance, and your eyes... may deceive you. But do not fear, little cap. Embrace it.",
        //             requires: [TALKED_TO_OLD_WISE_MUSHROOM]
        //         }
        //     ],
        //     portraitFrame: 1,
        //     sprite: resources.images.alchemistShroom,
        //     shadow: false,
        // });
        // this.addChild(al);

        const stone = new Sprite({
          resource: resources.images.stoneTop1,
          frameSize: new Vector2(32, 16),
          position: new Vector2(64, 48.01)
        })
        this.addChild(stone);
        const tree2Top = new tree2top(128, 64.01)
        this.addChild(tree2Top);
        const tree1Middle = new tree1middle(192, 64)
        this.addChild(tree1Middle);

        this.walls = new Set();

        this.loadScreen = new loadScreen(-160, -32);
        
    }

    step() {
        if (GameState.isPerceptionActive) {
            this.walls.clear();
        } else {
            this.walls.clear();
            addWallsOutdoorLevel1(this.walls);
        }
    }

    ready() {
        events.on("HERO_EXITS", this, () => {
            this.parent.addChild(this.loadScreen);
            setTimeout(() => {
                events.emit("CHANGE_LEVEL", new CaveLevel1({
                    heroPosition: new Vector2(gridCells(4), gridCells(6)),
                    hasCollectedRod: GameState.hasItem(1)
                }))
                this.parent.removeChild(this.loadScreen)
                GameState.setLocation("new CaveLevel1()");
                GameState.setSpeed(1);
            }, 600)
        })
    }

}
