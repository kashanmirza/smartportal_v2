import { getService } from '../../../services/getService';
import { updateServiceCategoryTypes } from '../../../constants/actionTypes/servicesCategoryTypes';


export function updateServicesCategory(url,payload){

    return dispatch => {
        dispatch(request());
        getService(url)
            .then((services) => {
                console.log("[Services Actions] Success ", services.data);
                dispatch(success(services.data));
            })
            .catch((error)=>{
                console.log("[Services Actions] Error ", error);
                dispatch(failure(error))
            });
    };

    function request(){{ return { type: updateServiceCategoryTypes.Update_Service_Category_Request, payload: [] }}}
    function success(services){{ return { type: updateServiceCategoryTypes.Update_Service_Category_Success, payload: services }}}
    function failure(error){{ return { type: updateServiceCategoryTypes.Update_Service_Category_Failure, error: error }}}
}

