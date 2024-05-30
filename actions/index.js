import { DROPBUTTON, NAVONE, NAVTHREE, NAVTWO } from "./types"

export const setNavOne = () => {
    const action = {
        type: NAVONE
    }
    return action
}

export const setNavTwo = () =>  {
    const action = {
        type: NAVTWO
    }
    return action
}

export const setNavThree = () =>  {
    const action = {
        type: NAVTHREE
    }
    return action
}

export const clickDrops = () => {
    const action = {
        type: DROPBUTTON
    }
    return action
}