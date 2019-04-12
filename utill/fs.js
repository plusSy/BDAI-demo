/**
 * @author: syl
 * @date: 2019/04/10
 * @description: 文件操作
 */
let fs = require('fs');

/**
 * 新增目录
 * @param {String} path 
 */
function mkdirSync (path) {
  fs.mkdirSync(path)
}

/**
 * 写入文件（会覆盖之前的内容）（文件不存在就创建）  utf8参数可以省略  
 * @param {String} path 
 * @param {String} val
 * @param {String} encoding
 */
function writeFile (path, val, encoding = 'utf-8') {
  return new Promise((res, rej) => {
    fs.writeFile(path, val, encoding, function (err) {
      if (err) {
        rej(err)
      } else {
        res()
      }
    })
  })
}

/**
 * 同步写入文件（会覆盖之前的内容）（文件不存在就创建）  utf8参数可以省略  
 * @param {String} path 
 * @param {String} val
 * @param {String} encoding
 */
function writeFileSync (path, val, encoding = 'utf-8') {
  fs.writeFileSync(path, val, encoding)
}

/**
 * 删除指定目录下的全部文件
 * @param {String} path 
 */
function unlink (path) {
  let data = fs.readdirSync(path);
  data.map(item => {
    fs.unlinkSync(`${path}/${item}`)
  })
}

/**
 * 删除目录
 * @param {String} dirName 
 */
function rmdirSync (dirName) {
  fs.rmdirSync (dirName)
}

/**
 * 读取指定目录下的全部文件
 * @param {String} path 
 */
function readdirSync (path) {
  let data = fs.readdirSync(path);
  return data;
}

module.exports = {
  mkdirSync,
  writeFile,
  writeFileSync,
  unlink,
  rmdirSync,
  readdirSync
}