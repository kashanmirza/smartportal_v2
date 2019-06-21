import config from '../config'

const urlFormatter= () => {
    let url = "";
    const server = config.get("server");
    url += server.url + server.port + '/SmartCustomerApi/api' ;
    return url;
};

export default urlFormatter;