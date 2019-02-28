let fs = require('fs')
//异步读取
// fs.readFile('./hello.txt',(err, data) => {
//   console.log(err)
//   console.log(data.toString());
// });

//同步读取
let data = fs.readFileSync('./hello.txt');
console.log(data.toString())