const { log } = require("console");
const fs = require("fs")


const contentSync =fs.readFileSync("./test.txt", "utf-8")
console.log(contentSync);

const contentAsync = fs.readFile("./test.txt","utf-8",(err,data)=>{
    if(err) console.log(err);
    else{
        console.log("async output");
        console.log("data",data);
        
        
    }
})
//writeFile : overrides the text in file
//sync
// fs.writeFileSync("./test.txt","Hello World")

//async
// fs.writeFile("./test.txt","Hello World Async",(err)=>{})


//append 
fs.appendFileSync("./test.txt","deepali")
fs.appendFile("./test.txt", " kumari", (err, data) => {
    if(err) console.log(err);
    else console.log(data);
    
    
})

fs.copyFile("./test.txt", "copy.txt",(err) => {})
fs.mkdirSync("./folder")

fs.mkdirSync("./fol/a/b", {recursive : true})
// console.log(fs.existsSync("./del.txt"))
// 
// fs.unlinkSync("./del.txt")
fs.statSync("./test.txt")


