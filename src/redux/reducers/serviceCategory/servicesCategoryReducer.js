import { servicesCategoryTypes } from '../../constants/actionTypes/servicesCategoryTypes';

const initialState = {
    loading: false,
    serviceCategories:[],
    error: null
}

export const servicesCategoryReducer= (state = initialState ,action) => {
    console.log(">::::::::::::::  ", action)
    switch (action.type){
        case servicesCategoryTypes.Get_Services_Category_Request:
            return {
                ...state,
                loading:true,
                serviceCategories: action.payload
            };
        case servicesCategoryTypes.Get_Services_Category_Success:
            return {
                ...state,
                loading:false,
                serviceCategories: action.payload
            };
        case servicesCategoryTypes.Get_Services_Category_Failure:
            return {
                ...state,
                loading:false,
                error: action.error
            };
        default:
            return state;
    }
}