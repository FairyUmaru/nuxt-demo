/**
 * 基于axios封装的请求模块
 */
import axios from 'axios'

//创建请求对象
export const request = axios.create({
  baseURL: 'https://conduit.productionready.io'
})

// 通过插件获取到上下文对象（query， params，req， res， app， store...）
// 插件导出函数必须作为default成员
export default ({ store }) => {
  // 请求拦截器
  // 添加请求拦截器
  request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    const { user } = store.state
    if(user && user.token){
      config.headers.Authorization = `Token ${user.token}`
    }

    // 返回config配置对象
    return config;
  }, function (error) {
    // 对请求错误做些什么
    // 此时请求还没有发出去
    return Promise.reject(error);
  });

// 响应拦截器
}

