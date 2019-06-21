import config from '../config';
import API from '../api/index'
const fakeServer = (url,opts) => {

    console.log("::::::url:::::  ", url);
    console.log("::::::opts:::::  ", opts);

    let baseURl = '';
    baseURl += config.serverURL + ":" + config.serverPort;
    baseURl += url;

    if(opts.method === "Get"){
        return API.get(baseURl)
            .then((data) => {
                console.log("[fakeServer ] get call data | ", data);
                return data;
            })
    }

    if(opts.method === "Post"){
        return API.post(baseURl,opts)
            .then((fakeData) => {
                console.log("[fakeServer ] post call data | ", fakeData);
                return fakeData.data;
            })
    }

};

export default fakeServer;
