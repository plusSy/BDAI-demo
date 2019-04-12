/**
 * @author: SYL
 * @date: 2019/04/10
 * @description: 图片操作
 */
var gm = require("gm");

/**
 * 阅读图片大小
 * @param srcImg    待阅读的图片路径
 */
function readImg(srcImg) {
  return new Promise((res, rej) => {
    console.log('===================>')
    gm(srcImg).size(function (err, data) {
      console.log('=<=======<<<<<<<<<<<<<<===========>')
      if (err) {
        rej(err)
      } else {
        res(data)
      }
    });
  }) 
}

/**
 * 裁剪图片
 * @param srcImg    待裁剪的图片路径
 * @param destImg   裁剪后的图片路径
 * @param width     宽度
 * @param height    高度
 * @param x         x坐标
 * @param y         y坐标
 */
function cropImg(srcImg,destImg,width, height, x, y) {
  return new Promise((res, rej) => {
    gm(srcImg).crop(width, height, x, y).write(destImg, function (err) {
      if (err) {
        rej(err)
      } else {
        res()
      }
    });
  }) 
}


module.exports = {
  readImg,
  cropImg
}
