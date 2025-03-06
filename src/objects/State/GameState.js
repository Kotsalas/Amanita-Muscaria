import { DeathScreen } from "../../DeathScreen";
import { events } from "../../Events";
import { Vector2 } from "../../Vector2";

const GameState = {
  collectedItems: new Set(),
  speed: 1,
  isPerceptionActive: false,
  sanity: 0,
  currentLocation: "new CaveLevel2()",

  collectItem(id) {
    this.collectedItems.add(id);
    console.log(this.collectedItems)
  },

  hasItem(id) {
    return this.collectedItems.has(id)
  },

  setSpeed(speed) {
    this.speed = speed;
  },

  togglePerception(perception) {
    this.isPerceptionActive = Boolean(perception);
  },

  adjustSanity() {
    this.sanity++;
    if(this.sanity === 10) {
      events.emit("CHANGE_LEVEL", new DeathScreen({
        heroPosition: new Vector2(0, 0)
      }))
    }
    console.log("Sanity: ", this.sanity)
  },

  setLocation(location) {
    this.currentLocation = location;
  }
}

export default GameState;