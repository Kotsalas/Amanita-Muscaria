class Resources {
    constructor() {
        this.toLoad = {
            hero: "/sprites/hero-sheet2.png",
            shadow: "/sprites/shadow.png",
            exit: "/sprites/exit.png",
            entrance: "/sprites/entrance.png",
            hole: "/sprites/hole.png",
            rod: "/sprites/rod.png",
            sky: "/sprites/sky.png",
            outdoorMap: "/sprites/outdoor-level-1-sheet.png",
            outdoorMap2: "/sprites/maze-1.png",
            swampMap1: "/sprites/swamp-map-sheet.png",
            swampForest: "/sprites/swamp-forest.png",
            cave: "/sprites/cave.png",
            caveGround: "/sprites/cave-ground.png",
            caveGround2: "/sprites/cave-ground2.png",
            knight: "/sprites/knight-sheet-1.png",
            textBox: "/sprites/text-box.png",
            fontWhite: "/sprites/sprite-font-white.png",
            portraits: "/sprites/portraits-sheet.png",
            bigDripstone: "/sprites/big-dripstone.png",
            smallDripstone: "/sprites/small-dripstone.png",
            loadScreen: "/sprites/load-screen-sheet.png",
            stoneTop1: "/sprites/stone-top-1.png",
            tree2Top: "/sprites/tree-2-top-sheet.png",
            tree1Middle: "/sprites/tree-1-middle-sheet.png",
            oldWiseMushroom: "/sprites/old-wise-mushroom-sheet.png",
            chillMushroom: "/sprites/chill-mushroom-sheet.png",
            alchemistShroom: "/sprites/alchemist-shroom.png",
            blur: "/sprites/blur-sheet.png",
            mushroomOfMood: "/sprites/mushroom-of-mood.png",
            mushroomOfPerception: "/sprites/mushroom-of-perception.png",
        };

        this.images = {}

        Object.keys(this.toLoad).forEach(key => {
            const img = new Image();
            img.src = this.toLoad[key];
            this.images[key] = {
                image: img,
                isLoaded: false
            }
            img.onload = () => {
                this.images[key].isLoaded = true;
            }
        })
    }
}

export const resources = new Resources();