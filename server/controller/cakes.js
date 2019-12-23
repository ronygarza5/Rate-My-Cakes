const mongoose = require('mongoose');
require('../models/cake');
const Cake = mongoose.model('Cake');
const Comment = mongoose.model('Comment');


module.exports = {
    index: (req,res) => {
        Cake.find()
        // console.log( Cake.find())
        .then(cakes => {
                res.json({results : cakes})
            })
            .catch(err => {
                res.json({errors : err})
            })
    }, 
    single: (req, res) => {
        Cake.findOne({_id: req.params.id})
            .then(cakes => {
                console.log(cakes)
                res.json({results : cakes})
            })
            .catch(err => {
                res.json({errors : err})
            })
    }, 
    create: (req, res) => {
        const cake = new Cake();
        cake.baker_name = req.body.baker_name;
        cake.imageurl = req.body.imageurl;
        cake.save()
        .then(newCake => {
            console.log(newCake)
            res.json({results : newCake})
        })
        .catch(err => {
            console.log(err)
            res.json({ errors : err.errors })
        })
    },
    createcomment: (req,res) => {
        console.log('hi')
        console.log(req.body)
        console.log(req.params)

        const comment = new Comment();
        comment.rating = req.body.rating;
        comment.comment = req.body.comment;  
        comment.save()
            .then(newComment => {
                console.log("MADE IT")
                Cake.findOneAndUpdate({_id: req.params.id}, {$push: {comments :newComment}})
                .then(newComment => {
                    res.json({results : newComment})  
             })
            })
            .catch(err => {
                res.json({errors : err.errors})
            })
    },
    update: (req, res) => {
        Cake.findByIdAndUpdate({_id: req.params.id})
            .then(cakes => {
                res.json({results : cakes })
            })
            .catch(err => {
                res.json({errors : err.errrors})
            })
    }, 
    delete: (req, res) => {
        Cake.remove({_id: req.params.id})
            .then(cakes => {
                res.json({results : cakes})
            })
            .catch(err => {
                res.json({errors : err})
            })
    }
}