const unitR = (state = [], action) => {
    switch (action.type) {
        case "GET":
            return [...action.data];
        default:
            return state;       
    }
}

export default unitR;