const anLoadScreen = (rootFrame = 0) => {

    return {
        duration: 600,
        frames: [
            {
                time: 0,
                frame: rootFrame
            },
            {
                time: 50,
                frame: rootFrame+1
            },{
                time: 100,
                frame: rootFrame+2
            },{
                time: 150,
                frame: rootFrame+3
            },
            {
                time: 200,
                frame: rootFrame+4
            },
            {
                time: 250,
                frame: rootFrame+5
            },
            {
                time: 290,
                frame: rootFrame+6
            },{
                time: 330,
                frame: rootFrame+7
            },{
                time: 370,
                frame: rootFrame+8
            },
            {
                time: 410,
                frame: rootFrame+9
            },
            {
                time: 450,
                frame: rootFrame+10
            }
        ]
    }

}

export const ANIMATE_LOAD_SCREEN = anLoadScreen(0);