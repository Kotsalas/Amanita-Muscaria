class StoryFlags {
    constructor() {
        this.flags = new Map();
    }

    add(flag) {
        this.flags.set(flag, true);
    }

    getRelevantScenario(scenarios=[]) {
        
        return scenarios.find(scenario => {

            const bypassFlags = scenario.bypass ?? [];
            for (let i=0; i<bypassFlags.length; i++) {
                const thisFlag = bypassFlags[i];
                if (this.flags.has(thisFlag)) {
                return false;
                }
            }

            const requiredFlags = scenario.requires ?? [];
            for (let i=0; i<requiredFlags.length; i++) {
                const thisFlag = requiredFlags[i];
                if (!this.flags.has(thisFlag)) {
                return false;
                }
            }

            return true;
        })
    }

}

export const TALKED_TO_OLD_WISE_MUSHROOM = "TALKED_TO_OLD_WISE_MUSHROOM";
export const TALKED_TO_CHILL_MUSHROOM = "TALKED_TO_CHILL_MUSHROOM";

export const storyFlags = new StoryFlags();
