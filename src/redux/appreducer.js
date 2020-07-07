
import {getAuthuserdata} from "./authreducer";

const SET_INITIALIZED = 'app/SET_INITIALIZED';

let initialState = {
    initialized:false
}

const appreducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}
export const initializedSuccess = () => ({type:SET_INITIALIZED})
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthuserdata());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}
export default appreducer;