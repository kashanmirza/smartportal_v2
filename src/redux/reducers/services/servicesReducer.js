import { servicesTypes } from '../../constants/actionTypes/serviceTypes';

const initialState = {
    loading: false,
    services: [],
    error: null
}

export const servicesReducer = (state = initialState ,action) => {
    switch (action.type){
        case servicesTypes.Get_Services_Request:
            return {
                ...state,
                loading:true,
                services: action.payload
            };
        case servicesTypes.Get_Services_Success:
            return {
                ...state,
                loading:false,
                services: action.payload
            };
        case servicesTypes.Get_Services_Failure:
            return {
                ...state,
                loading:false,
                error: action.error
            };
        default:
            return state;
    }
}

