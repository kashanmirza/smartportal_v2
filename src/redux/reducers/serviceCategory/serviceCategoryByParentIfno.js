import {servicesCategoryByParentInfoTypes} from '../../../constants/actionTypes/servicesCategoryTypes';

const initialState = {
    isLoading: false,
    data: [],
    error: null
};


export const serviceCategoryByInfoReducer = (state = initialState ,action) => {

    switch (action.type){
        case servicesCategoryByParentInfoTypes.Get_Services_Category_By_Info_Request:
            return {
                ...state,
                isLoading:true,
                data: action.payload
            };
        case servicesCategoryByParentInfoTypes.Get_Services_Category_By_Info_Success:
            return {
                ...state,
                isLoading:false,
                data: action.payload
            };
        case servicesCategoryByParentInfoTypes.Get_Services_Category_Failure:
            return {
                ...state,
                isLoading:false,
                error: action.error
            };
        default:
            return state;
    }
};

