const express = require("express");
const commentsRouter = express.Router();
const commentsModel = require("../model/comments.js")

commentsRouter.route("/")
    .post((req, res) => {
        let newComment = new commentsModel(req.body);
        newComment.save((err, savedComment) => {
            if (err) {
                console.error(err);
            } else {
                res.send(savedComment)
            }

        })

    });
commentsRouter.route("/:issue")
    .get((req, res) => {
        commentsModel.find(req.params,(err, foundComments) => {
            if (err) {
                console.error(err)
            } else {
                res.send(foundComments)
            }
        })
    })

module.exports = commentsRouter