const math = module.require("./math")
const { log } = require("console")
const fs = require("fs")
// fs.writeFileSync("./copy.txt","hello")
// fs.writeFile("./copy.txt","hello there ",()=>{})
// const result = fs.readFileSync("./copy.txt","utf-8")
// fs.readFile("./copy.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err)
        
//     }
//     else{
//         console.log(data)
//     }
// })
// fs.appendFileSync("./copy.txt",`Hey there ${Date.now()}`)
// fs.appendFile("./copy.txt",`Hey there ${Date.now()}`,()=>{})
// console.log(fs.statSync("./copy.txt"))
// fs.mkdirSync("./trash1/a/b",{recursive:true})
// fs.rmdir("./trash1",()=>{})
fs.unlinkSync("./copy.txt")