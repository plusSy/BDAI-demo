/**
 * @author: syl
 * @date: 2019/04/11
 * @description: 图片信息比较
 */

/**
 * 读取匹配位置信息
 * @param {Array} arr               需要匹配的字符
 * @param {String} data           源Json
 * @param {String} actionType       行为参数
 * @returns {Object} 找到的位置对象以及行为参数
 */
function readMsg (arr, data, actionType) {
  let sourceJson = JSON.parse(data).words_result;
  return new Promise((res, rej) => {
    for (let x = 0; x < sourceJson.length; x++) {
      for (let y = 0; y < arr.length; y++) {
        if (sourceJson[x].words.indexOf(arr[y]) > -1) {
          res({...sourceJson[x], actionType, hasKeyWord: true});
        } else {
          res({hasKeyWord: false});
        }
      }
    }
  })
}

module.exports = {
  readMsg
}