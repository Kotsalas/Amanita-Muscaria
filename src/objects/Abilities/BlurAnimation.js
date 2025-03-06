const anBlurForMood = (rootFrame) => {

    return {
        duration: 10000,
        frames: [
            {
                time: 0,
                frame: rootFrame
            },
            {
                time: 131,
                frame: rootFrame-1
            },
            {
                time: 394,
                frame: rootFrame+1
            },
            {
                time: 525,
                frame: rootFrame
            },
            {
                time: 788,
                frame: rootFrame+2
            },
            {
                time: 919,
                frame: rootFrame+1
            },
            {
                time: 1182,
                frame: rootFrame+3
            },
            {
                time: 1313,
                frame: rootFrame+2
            },
            {
                time: 1576,
                frame: rootFrame+4
            },
            {
                time: 1707,
                frame: rootFrame+3
            },
            {
                time: 1970,
                frame: rootFrame+5
            },
            {
                time: 2101,
                frame: rootFrame+4
            },
            {
                time: 2364,
                frame: rootFrame+6
            },
            {
                time: 2495,
                frame: rootFrame+5
            },
            {
                time: 2758,
                frame: rootFrame+7
            },
            {
                time: 3300,
                frame: rootFrame+6
            },
            {
                time: 3500,
                frame: rootFrame+7
            },
            {
                time: 4000,
                frame: rootFrame+6
            },
            {
                time: 4200,
                frame: rootFrame+7
            }
        ]
    }

}

const anBlurForPerception = (rootFrame) => {
    return {
        duration: 1000,
        frames: [
            {
                time: 0,
                frame: rootFrame+7
            },
            {
                time: 100,
                frame: rootFrame+5
            },
            {
                time: 300,
                frame: rootFrame+2
            },
            {
                time: 500,
                frame: rootFrame+1
            },
            {
                time: 700,
                frame: rootFrame
            }
        ]
    }
}

export const ANIMATE_BLUR_FOR_MOOD = anBlurForMood(1);
export const ANIMATE_BLUR_FOR_PERCEPTION = anBlurForPerception(0);