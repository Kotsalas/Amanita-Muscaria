const anTree = (rootFrame = 0) => {

    return {
        duration: 5000,
        frames: [
            {
                time: 0,
                frame: rootFrame
            },
            {
                time: 1250,
                frame: rootFrame+1
            },{
                time: 2500,
                frame: rootFrame
            },{
                time: 3750,
                frame: rootFrame+2
            }
        ]
    }

}

export const ANIMATE_TREE = anTree(0);