const express=require('express')
const server=express()

server.use(express.json())
server.use(express.urlencoded({extended:true}))


server.listen(2706,()=>{
    console.log(' server start at http://localhost:2706')
})