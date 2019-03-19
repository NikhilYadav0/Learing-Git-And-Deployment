const express=require('express')
const server=express()
const path=require('path')
server.use(express.json())
server.use(express.urlencoded({extended:true}))
const server_port=process.env.PORT || 3333

server.use('/',express.static(path.join(__dirname,'public')))
server.listen(server_port,()=>{
    console.log(server_port)
})
