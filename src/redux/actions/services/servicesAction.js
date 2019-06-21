import { getService } from '../../services/getServices';
import { servicesTypes } from '../../constants/actionTypes/serviceTypes';

import {services} from '../../responseJson/services'



export function getServices(url){

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
        dispatch(success(services));
    };

    function request(){{ return { type: servicesTypes.Get_Services_Request, payload: [] }}}
    function success(services){{ return { type: servicesTypes.Get_Services_Success, payload: services }}}
    function failure(error){{ return { type: servicesTypes.Get_Services_Failure, error: error }}}
}

