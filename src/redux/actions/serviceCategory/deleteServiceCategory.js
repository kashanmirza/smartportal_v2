import { getService } from '../../../services/getService';
import { deleteServiceCategoryTypes } from '../../../constants/actionTypes/servicesCategoryTypes';


export function deleteServicesCategory(url,payload){

    return dispatch => {
        dispatch(request());
        getService(url)
            .then((services) => {
                dispatch(success(services.data));
            })
            .catch((error)=>{
                dispatch(failure(error))
            });
    };

    function request(){{ return { type: deleteServiceCategoryTypes.Delete_Service_Category_Request, payload: [] }}}
    function success(services){{ return { type: deleteServiceCategoryTypes.Delete_Service_Category_Success, payload: services }}}
    function failure(error){{ return { type: deleteServiceCategoryTypes.Delete_Service_Category_Failure, error: error }}}
}

