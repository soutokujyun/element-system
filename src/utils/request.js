import axios from 'axios';

// 创建axios实例
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
});
// request拦截器
service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers['X-Token'] = getToken(); // 获取token
        }
        return config;
    }, error => {
        console.log(error);
        Promise.reject(error);
    }
);
// respone拦截器
service.interceptors.response.use(
    response => {
        // 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
        // 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
        // 
        const res = response.data;
        if (res.code !== 200) {
            MessageChannel({
                
            })
        }
    },

)
