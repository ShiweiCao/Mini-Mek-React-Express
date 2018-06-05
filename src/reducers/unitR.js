let initialState = {
    pilots : [],
    temp : {},
    units: [],
    meches: [],
}

const unitR = (state = initialState, action) => {
    switch (action.type) {
        case "GETUNIT":
            return {...state, units: [...action.data]};
        default:
            return state;       
    }
}

export default unitR;