import { GameObject } from "../../GameObject";
import { Vector2 } from "../../Vector2";
import {UP, DOWN, LEFT, RIGHT, Input} from "../../Input.js";
import {gridCells, isSpaceFree} from "../../helpers/grid.js";
import {Sprite} from "../../Sprite.js";
import {resources} from "../../Resource.js";
import {Animations} from "../../Animations.js";
import {FrameIndexPattern} from "../../FrameIndexPattern.js";
import {
    PICK_UP_DOWN,
    STAND_DOWN,
    STAND_LEFT,
    STAND_RIGHT,
    STAND_UP,
    WALK_DOWN,
    WALK_LEFT,
    WALK_RIGHT,
    WALK_UP
} from "./heroAnimations.js";
import {moveTowards} from "../../helpers/moveTowards.js";
import { events } from "../../Events.js";
import GameState from "../State/GameState.js";

export class Hero extends GameObject {
    constructor(x, y) {
        super({
            position: new Vector2(x, y)
        });

        const shadow = new Sprite({
            resource: resources.images.shadow,
            frameSize: new Vector2(32, 32),
            position: new Vector2(-8, -17)
        })
        this.addChild(shadow);

        this.body = new Sprite({
            resource: resources.images.hero,
            frameSize: new Vector2(32, 32),
            hFrames: 3,
            vFrames: 8,
            frame: 1,
            position: new Vector2(-8, -13),
            animations: new Animations({
                walkDown: new FrameIndexPattern(WALK_DOWN),
                walkUp: new FrameIndexPattern(WALK_UP),
                walkLeft: new FrameIndexPattern(WALK_LEFT),
                walkRight: new FrameIndexPattern(WALK_RIGHT),
                standDown: new FrameIndexPattern(STAND_DOWN),
                standUp: new FrameIndexPattern(STAND_UP),
                standLeft: new FrameIndexPattern(STAND_LEFT),
                standRight: new FrameIndexPattern(STAND_RIGHT),
                pickUpDown: new FrameIndexPattern(PICK_UP_DOWN),
            })
        })
        this.addChild(this.body);

        this.facingDirection = DOWN;
        this.destinationPosition = this.position.duplicate();
        this.itemPickupTime = 0;
        this.itemPickUpShell = null;
        this.isLocked = false;

        events.on("HERO_PICKS_UP_ITEM", this, data => {
            this.onPickUpItem(data);
        })

    }

    ready() {
        events.on("START_TEXT_BOX", this, () => {
            this.isLocked = true;
        })
        events.on("END_TEXT_BOX", this, () => {
            this.isLocked = false;
        })
        events.on("HERO_ENTERS", this, () => {
            this.isLocked = true;
        })
        events.on("HERO_EXITS", this, () => {
            this.isLocked = true;
        })
    }

    step(delta, root) {

        if (this.isLocked === true) {
            return;
        }

        if (this.itemPickupTime > 0) {
            this.workOnItemPickup(delta);
            return;
        }
        
        /** @type {Input} */
        const input = root.input;
        if (input?.getActionJustPressed("Space")) {

            const objAtPosition = this.parent.children.find(child => {
                return child.position.matches(this.position.toNeighbor(this.facingDirection))
            })

            if (objAtPosition) {
                events.emit("HERO_REQUESTS_ACTION", objAtPosition);
            }

        }

        const distance = moveTowards(this, this.destinationPosition, GameState.speed)
        const hasArrived = distance <= 1;
        if (hasArrived) {
            this.tryMove(root)
        }

        this.tryEmitPosition()
    }

    tryEmitPosition() {
        // deleted in order for the blur animation in perception ability to work even if the player doesnt move
        // if (this.lastX === this.position.x && this.lastY === this.position.y) {
        //     return
        // }
        this.lastX = this.position.x;
        this.lastY = this.position.y;
        events.emit("HERO_POSITION", this.position)
    }

    tryMove(root) {
        const {input} = root;

        if (!input.direction) {
    
            if (this.facingDirection === LEFT) { this.body.animations.play("standLeft")};
            if (this.facingDirection === RIGHT) { this.body.animations.play("standRight")};
            if (this.facingDirection === DOWN) { this.body.animations.play("standDown")};
            if (this.facingDirection === UP) { this.body.animations.play("standUp")};
    
            return;
        }
    
        let nextX = this.destinationPosition.x;
        let nextY = this.destinationPosition.y;
        const gridSize = 16;
        
        if (input.direction === DOWN) {
            nextY += gridSize;
            this.body.animations.play("walkDown");
        }
        if (input.direction === UP) {
            nextY -= gridSize;
            this.body.animations.play("walkUp");
        }
        if (input.direction === LEFT) {
            nextX -= gridSize;
            this.body.animations.play("walkLeft");
        }
        if (input.direction === RIGHT) {
            nextX += gridSize;
            this.body.animations.play("walkRight");
        }
        this.facingDirection = input.direction ?? this.facingDirection;

        const spaceIsFree = isSpaceFree(root.level?.walls, nextX, nextY);
        const solidBodyAtSpace = this.parent.children.find(c => {
            return c.isSolid && c.position.x === nextX && c.position.y === nextY
        })
        if (spaceIsFree && !solidBodyAtSpace) {
            this.destinationPosition.x = nextX;
            this.destinationPosition.y = nextY;
        }
    }

    onPickUpItem({ image, position, id }) {
        this.destinationPosition = position.duplicate();

        this.itemPickupTime = 1000;

        this.itemPickUpShell = new GameObject({});
        this.itemPickUpShell.addChild(new Sprite({
            resource: image,
            position: new Vector2(0, -18),
            id: id
        }))
        this.addChild(this.itemPickUpShell);
    }

    workOnItemPickup(delta) {
        this.itemPickupTime -= delta;
        this.body.animations.play("pickUpDown");

        if (this.itemPickupTime <= 0) {
            this.itemPickUpShell.destroy();
        }

    }

}