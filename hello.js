const http=require('http')
const server= http.createServer((req,res)=>{
    console.log(req.url,req.headers,req.method)
    //process.exit()
    res.setHeader('Content-type','text/html')
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Welcome to Nodejs</h1>')
    if(req.url=='/home'){
        res.write('<h1>Welcome to home</h1></body>')
    }
    else if(req.url=='/node'){
        res.write('<h1> Welcome to my Node Js project</h1></body>')
    }
    else if(req.url=='/about'){
        res.write('<h1>Welcome to About Us page</h1></body>')
    }
    res.write('</html>')
    res.end()
})
server.listen(3000);
