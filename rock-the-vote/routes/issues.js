const express = require('express');
const issuesRouter = express.Router();
const issuesModel = require('../model/issues');

issuesRouter.route("/")
    .post((req,res)=>{
        let newIssue = new issuesModel(req.body);
        newIssue.save((err, savedIssue)=>{
            if (err){
                console.error(err);
            } else {
                res.send(savedIssue)
            }
        })
    })
    .get((req, res)=>{
        issuesModel.find(req.query, (err, foundIssues)=>{
            if (err){
                console.error(err)
            } else {
                res.send(foundIssues);
            }
        })
    })
issuesRouter.route("/:id")
    .get((req, res)=>{
        let {id}=req.params;
        issuesModel.findOne({ _id:id},(err, foundIssue)=>{
            if (err){
                console.error(err);
            } else {
                res.send(foundIssue);
            }
        })
    })
    .delete((req, res)=>{
        let {id}= req.params;
        issuesModel.findByIdAndRemove(id, (err, removedIssue)=>{
            if (err){
                console.error(err);
            } else {
                res.send(removedIssue)
            }

        })
        
    })
    .put((req,res)=>{
        let {id}=req.params;
        issuesModel.findByIdAndUpdate(id, req.body, {new:true}, (err, updatedIssue)=>{
            if (err){
                console.error(err)
            } else {
                res.send(updatedIssue)
            }
        })
    })




module.exports = issuesRouter