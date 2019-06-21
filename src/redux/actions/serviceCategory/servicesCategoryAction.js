import { getService } from '../../services/getServices';
import { servicesCategoryTypes } from '../../constants/actionTypes/servicesCategoryTypes';


import { serviceCategory } from '../../responseJson/serviceCategory'

export function getServicesCategory(url){

    return dispatch => {
        // dispatch(request());
        // getService(url)
        //     .then((servicesCategory) => {
        //         console.log("[Services Category Actions] Success ", servicesCategory.data);
        //         dispatch(success(servicesCategory.data));
        //     })
        //     .catch((error)=>{
        //         console.log("[Services Category Actions] Error ", error);
        //         dispatch(failure(error))
        //     })
        dispatch(success(serviceCategory));
    };

    function request(){{ return { type: servicesCategoryTypes.Get_Services_Category_Request, payload: [] }}}
    function success(services){{ return { type: servicesCategoryTypes.Get_Services_Category_Success, payload: services }}}
    function failure(error){{ return { type: servicesCategoryTypes.Get_Services_Category_Failure, error: error }}}
}

