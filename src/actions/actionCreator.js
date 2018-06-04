const axios = require('axios');

// ----------------thunk--------------------//
export const getAllUnits = () => {
    return(dispatch => {
        axios.get("http://localhost:9000/units/")
            .then(res => {
                let units = res.data;
                dispatch(updateUnit(units));
            })
            .catch(err => console.log(err));
    })
}

export const getAllPilots = () => {
    return(dispatch => {
        axios.get("http://localhost:9000/pilots/")
            .then(res => {
                let pilots = res.data;
                dispatch(updatePilot(pilots));
            })
            .catch(err => console.log(err));
        }
    )
}

export const saveChange = (pilot) => {
    if (pilot._id !== undefined){
        return(dispatch => {
            axios.put("http://localhost:9000/pilots/" + pilot._id, pilot)
                .then(res => {
                    dispatch(getAllPilots());
                })
                .catch(err => console.log(err));
        })
    } 
    
    else {
        return(dispatch => {
            axios.post("http://localhost:9000/pilots/", pilot)
                .then(res => {
                    dispatch(getAllPilots());
                })
                .catch(err => console.log(err));
        })
    }   
}

export const deletePilot = (id) => {
    return(dispatch => {
        axios.delete("http://localhost:9000/pilots/" + id)
            .then(res => {
                dispatch(getAllPilots());

            })
            .catch(err => console.log(err));
    })
}

export const saveUnit = (unit) => {
    return(dispatch => {
        axios.post("http://localhost:9000/units", unit)
            .then(res => {
                
            })
            .catch(err => console.log(err));
    })
}

//----------------------------------------//
export const updatePilot = (data) => {
    return {
        type: "GETPILOT",
        data : data
    }
}

export const updateUnit = (data) => {
    return {
        type: "GETUNIT",
        data: data,
    }
}

export const selectRow = (id) => {
    return {
        type: "SELECTPILOT",
        id : id
    }
}

export const change = (value, target) => {
    return {
        type: "CHANGE",
        value : value,
        target: target,
    }
}

export const clearTemp = () => {
    return {
        type: "CLEARTEMP",
    }
}