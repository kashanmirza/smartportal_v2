import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { SERVICES } from '../shared/services';


export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});


export const login = (username, password) => ({
    type: ActionTypes.LOGIN,
    payload: {
        username: username,
        password: password
    }
});




// dishes operations
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));


    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
};

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes 
});

// services operation

export const fetchServices = () => (dispatch) => {
    dispatch(servicesLoading(true));


    setTimeout(() => {
        dispatch(addServices(SERVICES));
    }, 2000);
};

export const servicesLoading = () => ({
    type: ActionTypes.SERVICES_LOADING
});

export const servicesFailed = (errmess) => ({
    type: ActionTypes.SERVICES_FAILED,
    payload: errmess
});

export const addServices = (services) => ({
    type: ActionTypes.ADD_SERVICES,
    payload: services 
});