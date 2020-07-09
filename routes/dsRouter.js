var express = require('express');
var dsRouter = express.Router();
var modifyFunc = require('../logic/modifyFunc');

dsRouter.use(express.json());
dsRouter.use(express.urlencoded({ extended: true }));

dsRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    next();
})
.get((req,res,next)=>{
    res.end("Get requesst recieved");
})
.post((req,res,next)=>{ 
    req.body; // JavaScript object containing the parse JSON
    console.log("The Object received from POST is: ",req.body);
    var resultObj = req.body;
    resultObj = modifyFunc(resultObj);
    res.json(resultObj);
    res.end("Post request recieved");
})
.put((req,res,next)=>{
    res.end("Put request recieved");
})
.delete((req,res,next)=>{
    res.end("Delete request recieved");
});

module.exports = dsRouter;

