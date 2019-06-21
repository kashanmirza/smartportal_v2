import 'whatwg-fetch';
import axios from 'axios'
import url from '../constants/cummunication'



export function getService(url){
    const request = {
        method: "Get",
        headers : {'Content-Type' : "application/json"},
        body : JSON.stringify({})
    };

    return axios.get(url)
        .then((data)=>{
            console.log("[ API Call ] Data ", data);
            return data;
        })
        .catch((err)=>{
            console.log("[ API Call ] Error ", err);
            return null
        });
}
