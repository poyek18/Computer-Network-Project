const express=require("express"),serverless=require("serverless-http"),rateLimit=require("express-rate-limit"),app=express();app.use(express.json());const limiter=rateLimit({windowMs:9e5,max:5,message:{error:"Too many requests. Please try again later."}});app.use("/api/",limiter),app.get("/api/test",(e,s)=>{s.json({message:"Rate limiting is active!"})}),module.exports.handler=serverless(app);
