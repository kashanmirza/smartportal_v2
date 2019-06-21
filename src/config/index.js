import convict from 'convict';


const config = convict({
    server:{
        url:"http://10.100.130.138",
        port:""
    }
});


export default config;