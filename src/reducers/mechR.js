let initialState = {
    pilots : [],
    temp : {},
    units: [],
    meches: [],
}

const mechR = (state = initialState, action) => {
    switch (action.type) {
        case "GETMECH":
            return {...state, meches: [...action.data], temp: action.data[0]};
        case "SELECTMECH": 
            return {...state, temp: state.meches[action.id]}
        case "CHANGE":
            let obj = {...state.temp};
            obj[action.target] = action.value;
            return {...state, temp: obj}
        case "CLEARTEMP":
            return {...state, temp: {}}
        default:
            return state;
    }
}

export default mechR;