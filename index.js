/**
* @file 图像辨别/文字位置识别
* @author SYL
* @date 2019/04/10
* @description 图像辨别/文字位置识别
**/

let fs = require('fs');
let gm = require("gm");

let { mkdirSync, writeFile, writeFileSync, unlink, rmdirSync, readdirSync } = require('./utill/fs.js');
let { readImg, cropImg } = require('./utill/gm.js');
let { analysisImg } = require('./utill/analysisImg.js');
let { readMsg } = require('./utill/compare.js');

// 要找的字
const FINDARR = ['团购'];

function revert (imgBase, jsonBase) {
  let imgDestUrl = imgBase, jsonDestUrl = jsonBase;
  return function edit (imgUrlArr) {
    console.log('imgUrlArr', imgUrlArr)
    for (let i = 0; i < imgUrlArr.length; i++) {
      let imgUrl = imgUrlArr[i];
      console.log('===========>imgUrl', imgUrl)
      readImg(imgUrl).then(res => {
        let { width, height } = res;
        console.log('readImg', width);
        analysisImg(imgUrl, i).then(res => {
          console.log('analysisImg', res);
          readMsg(FINDARR, res, width).then(res => {
            console.log('readMsg', res);
            if (res.hasKeyWord) {
              writeFile(`${jsonDestUrl}${width}.json`, JSON.stringify(res)).then(res => {
               return new Promise((res, rej) => {
                let arr = [width, width/2];
                arr.map((item, index) => {
                  (function (index) {
                    cropImg(imgUrl, `${imgDestUrl}${Math.ceil(width/2)}${index === 0 ? 'lf' : 'rg'}.png`, width/2, height, width/2 * index, 0 )
                  })(index)
                })
                let resultImgPath = readdirSync(imgDestUrl);
                console.log('resultImgPath*******', resultImgPath)
                res(
                  resultImgPath.map(item => {
                    console.log('imgDestUrl + item', imgDestUrl + item)
                    return imgDestUrl + item
                  })
                )
               }).then(res => {
                  console.log('nextPath', res)
                  edit(res)
               })
              }).catch(err => { console.log(err) })
            } else { 
              return console.log('hasNone')
            }
          })
        }).catch(err => { console.log(err) })
  
      }).catch(err => { console.log('readImg', err) })
    }
  }
}

let fun = revert('./result/img/', './result/json/');
// fun(['./image/ocj.png'])
// fun(['./result/img/190lf.png'])
// fun(['./result/img/95rg.png'])
