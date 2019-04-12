/**
 * @author: syl
 * @date: 2019/04/11
 * @description: 百度AI 识别图片信息,包含位置
 */
let fs = require('fs');
let AipOcrClient = require("baidu-aip-sdk").ocr;
let { APP_ID, API_KEY, SECRET_KEY, IMG_OPTIONS } = require("../config/index.js");

let client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY);

/**
 * 图片文字识别
 * @param {String} source
 * @param {Number} curIdx
 * @param {Object} options 
 * @returns {String} 
 */
function analysisImg (source, curIdx, options = IMG_OPTIONS) {
  let image = fs.readFileSync(source).toString("base64");
  return new Promise((res, rej) => {
    (function(time) {
      setTimeout(() => {
        console.log('-----------------')
        client.accurate(image, options).then(function(result) {
          res(JSON.stringify(result))
        }).catch(function(err) {
          rej(err)
        })
      }, time)
    })(curIdx * 1000)
  })
}

module.exports = {
  analysisImg
}