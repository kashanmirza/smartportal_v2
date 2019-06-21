import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback, InitialLogin } from './forms'

//Reducers
// import {servicesReducer} from './reducers/services/servicesReducer';
// import {servicesCategoryReducer} from './reducers/services/servicesCategoryReducer';
// import { login } from './reducers/login'

import { serviceCategoryByInfoReducer } from './reducers/serviceCategory/serviceCategoryByParentIfno';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            serviceCategoryByInfoReducer : serviceCategoryByInfoReducer,
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}



//
// const Reducers = combineReducers({
//              ...reducers
//         });
//
// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true, traceLimit: 25 });
//
// const store = applyMiddleware(thunk,logger)(createStore)(Reducers, devTools);

//export default ConfigureStore