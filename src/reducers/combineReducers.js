import { combineReducers } from "redux";

import mechR from './mechR.js'
import pilotR from './pilotR.js'
import unitR from './unitR.js'


const reducers = combineReducers({
    mechR,
    pilotR,
    unitR
});

export default reducers;