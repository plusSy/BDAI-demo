/**
 * @author: SYL
 * @date: 2019/04/10
 * @description: 基础变量全局配置
 */
var https = require('https');
var qs = require('querystring');

/***** 百度AIY用户信息配置 ******/

let baiduUser = {
  SYL: { APP_ID: '15778700', API_KEY: 'IXBhYDN9SLCMuq8h9VeEET8m', SECRET_KEY: 'KWdUvVjuQsFMmhpIEHlAW0zqdrhVZE3V' },
  ZYG: { APP_ID: '15995695', API_KEY: 'fgTP2DzAcv4MQpUANCrIzQi4', SECRET_KEY: 'RRCTvGezdERGoaGmzUSmINNE2zGxNuQf' }
}

const APP_ID = baiduUser.SYL.APP_ID
const API_KEY  = baiduUser.SYL.API_KEY
const SECRET_KEY  = baiduUser.SYL.SECRET_KEY
const access_token = "24.a1ba8a9cc0795fb025e7bf1a01dddf7b.2592000.1557642764.282335-15778700"
const IMG_OPTIONS = {
  recognize_granularity: 'big',
  language_type: 'CHN_ENG',
  detect_direction: 'true',
  detect_language: 'true',
  vertexes_location: 'false',
  probability: 'false'
};
/***** 百度AIY用户信息配置 ******/



// const param = qs.stringify({
//     'grant_type': 'client_credentials',
//     'client_id': baiduUser.SYL.API_KEY,
//     'client_secret': baiduUser.SYL.SECRET_KEY
// });

// https.get(
//     {
//         hostname: 'aip.baidubce.com',
//         path: '/oauth/2.0/token?' + param,
//         agent: false
//     },
//     function (res) {
//         // 在标准输出中查看运行结果
//         res.pipe(process.stdout);
//     }
// );

module.exports = {
  APP_ID,
  API_KEY,
  SECRET_KEY,
  access_token,
  IMG_OPTIONS
}