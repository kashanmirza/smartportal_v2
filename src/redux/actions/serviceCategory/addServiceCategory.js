import { getService } from '../../../services/getService';
import { addServiceCategoryTypes } from '../../../constants/actionTypes/servicesCategoryTypes';


export function addServicesCategory(url,payload){

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

    function request(){{ return { type: addServiceCategoryTypes.Add_Service_Category_Request, payload: [] }}}
    function success(services){{ return { type: addServiceCategoryTypes.Add_Service_Category_Success, payload: services }}}
    function failure(error){{ return { type: addServiceCategoryTypes.Add_Service_Category_Failure, error: error }}}
}

