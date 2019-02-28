//创建server
let http = require('http')

let server = http.createServer((req,res)=>{
    console.log(req.url)
    res.statusCode = 201
    res.setHeader('Content-Type', 'text/html')
    res.write(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>你好</h1>
    <p>今天星期四</p>
</body>
</html>
    `)
    res.end()
})
server.listen(8000)
console.log('请在浏览器打开：localhost:8000。。。。')