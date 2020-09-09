import {
    SET_HUMAN_RESOURCE_WATERING
} from "../../constants/actionTypes";

const initState = {
    loading: false
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_HUMAN_RESOURCE_WATERING:
            return {
                ...state,
                humanWatering: action.payload
            };
        case "test" :
            return {

            };
        default:
            return {
                ...state
            }
    }
};

export default reducer;