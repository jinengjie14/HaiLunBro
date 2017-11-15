import axios from 'axios'
import Vue from 'vue'

// import store from './store'
// axios 配置
axios.defaults.timeout = 5000;
//axios跨域
// axios.withCredentials = true;
axios.defaults.baseURL = 'http://10.1.65.33:85/';

var AUTH_TOKEN = 'Bearer ' + localStorage.api_token

axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// http response 拦截器
axios.interceptors.response.use(
    response => {

        switch (response.data.code) {
            case 4000:
                var desc = '';

                for(var key in response.data.data){
                    response.data.data[key].forEach(function (value) {
                        desc = desc + value + '<br>';
                    });
                }

                Vue.$Notice.info({
                    title: response.data.message,
                    desc: desc,
                });
                break;

            case 4001:
                Vue.$Message.error(response.data.message);
                break;

            case 4002:
                Vue.$Message.success(response.data.message);
                break;

            case 4003:
                Vue.$Message.error(response.data.message);
                break;
            case 4008:
                Vue.$Message.success(response.data.message);
                break;

            case 2000:
                Vue.$Message.success(response.data.message);
                break;
        }
        return response;
    },
    error => {
        if (error.response) {
            Vue.$Message.error('服务端发生错误,请联系管理员/(ㄒoㄒ)/~~');
        }
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response.data)
    });

export default axios;