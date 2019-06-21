import { getService } from '../../../services/getService';
import { servicesCategoryByParentInfoTypes } from '../../../constants/actionTypes/servicesCategoryTypes';

import serviceCategoryByInfo from '../../../responseJson/serviceCategoryByInfo'

export function getServicesCategoryByInfo(url){

    return dispatch => {
        // dispatch(request());
        // getService(url)
        //     .then((services) => {
        //         console.log("[Services Actions] Success ", services.data);
        //         dispatch(success(services.data));
        //     })
        //     .catch((error)=>{
        //         console.log("[Services Actions] Error ", error);
        //         dispatch(failure(error))
        //     });
        dispatch(success(serviceCategoryByInfo));
    };

    function request(){{ return { type: servicesCategoryByParentInfoTypes.Get_Services_Category_By_Info_Request, payload: [] }}}
    function success(services){{ return { type: servicesCategoryByParentInfoTypes.Get_Services_Category_By_Info_Success, payload: services }}}
    function failure(error){{ return { type: servicesCategoryByParentInfoTypes.Get_Services_Category_By_Info_Failure, error: error }}}
}

