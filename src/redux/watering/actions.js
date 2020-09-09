import {
    SET_HUMAN_RESOURCE_WATERING
} from "../../constants/actionTypes";

export const setHumanResourceWatering = listHuman => {
    return {
        type: SET_HUMAN_RESOURCE_WATERING,
        payload: listHuman
    }
};