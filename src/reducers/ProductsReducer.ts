import { Reducer } from "redux";
import {ILocationState, IBusinesses, LocationssActionTypes} from "../types/LocationsTypes";
import {ILocation} from "../types/LocationTypes";

const initialLocationState: ILocationState = {
    locations: <IBusinesses>{},
    currentLocation: <ILocation>{},
    locationsLoading: false,
    errors: undefined,
};

export const locationsReducer: Reducer<ILocationState> = (state = initialLocationState, action) => {
    switch (action.type) {
        case LocationssActionTypes.FETCH_SINGLE_SUCCESS: {
            return {
                ...state,
                currentLocation: action.payload,
                locationsLoading: false
            }
        }
        case LocationssActionTypes.GETALL: {
            return {
                ...state,
                locationsLoading: false
            }
        }
        case LocationssActionTypes.FETCH_SUCCESS: {
            return {
                ...state,
                locations: action.payload,
                locationsLoading: false
            }
        }
        case LocationssActionTypes.FETCH_ERROR: {
            return {
                ...state,
                errors: action.payload,
                locationsLoading: false
            }
        }
        case LocationssActionTypes.LOADING: {
            return {
                ...state,
                locationsLoading: true
            }
        }
    }
    return state;
};
