const mechR = (state = [], action) => {
    switch (action.type) {
        case "GET":
            return [...action.data];
        default:
            return state;       
    }
}

export default mechR;