let initialState = {
    pilots : [],
    temp : {},
    units: [],
    meches: [],
}

const pilotR = (state = initialState, action) => {
    switch (action.type) {
        case "GETPILOT":
            return {...state, pilots: [...action.data], temp: action.data[0]};
        case "SELECTPILOT": 
            return {...state, temp: state.pilots[action.id]}
        case "CHANGE":
            let obj = {...state.temp};
            obj[action.target] = action.value;
            return {...state, temp: obj}
        case "CLEARTEMP":
            return {...state, temp: {name:"", rank:"", age:0, gunnery:0, piloting:0}}
        default:
            return state;       
    }
}

export default pilotR;