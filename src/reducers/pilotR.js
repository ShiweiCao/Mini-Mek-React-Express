let initialState = {
    pilots : [],
    temp : {},
}

const pilotR = (state = initialState, action) => {
    switch (action.type) {
        case "GET":
            return {...state, pilots: [...action.data], temp: action.data[0]};
        case "SELECT": 
            return {...state, temp: state.pilots[action.id]}
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

export default pilotR;