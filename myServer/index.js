import http from "http"
import fs from "fs"
import moment from "moment"
import url from "url"
import { queryObjects } from "v8"

const myserver = http.createServer((req,res) => {
    if(req.url == '/favicon.ico') return res.end();
    const log =`${Date.now()}:${req.method}-request received from ${req.url}`
    // console.log(log, req.headers);
    const myUrl= url.parse(req.url, true)
    console.log(myUrl)
    fs.appendFile("./log.txt",log,(err,data)=> {
        switch(myUrl.pathname){
            case  '/':
                res.end("Home");
                break;
            case '/contact':
                const uname = myUrl.query.uname
                res.end(`my name is ${uname} `)
                break;
            default :
                res.end("404")
            

        }
        
    
    });
    
    
})

myserver.listen(8000,() => console.log("Server started"));