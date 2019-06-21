import {addServiceCategoryTypes} from '../../../constants/actionTypes/servicesCategoryTypes';

const initialState = {
    isLoading: false,
    data: [],
    error: null
};


export const addServicesCategory = (state = initialState ,action) => {

    switch (action.type){
        case addServiceCategoryTypes.Add_Service_Category_Request:
            return {
                ...state,
                isLoading:true,
                data: action.payload
            };
        case addServiceCategoryTypes.Add_Service_Category_Success:
            return {
                ...state,
                isLoading:false,
                data: action.payload
            };
        case addServiceCategoryTypes.Add_Service_Category_Failure:
            return {
                ...state,
                isLoading:false,
                error: action.error
            };
        default:
            return state;
    }
};

