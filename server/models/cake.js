const mongoose = require('mongoose');
const CommentSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: [true, "A cake should have a rating."],
       
    },
    comment: {
        type: String, 
        required: [true, "Leave a comment on how the cake tasted."],
        minlength: [2, "Comment must be at least 2 characters long."]
    }
}, {timestamps: true})
mongoose.model("Comment", CommentSchema);

const CakeSchema = new mongoose.Schema({
    baker_name: {
        type: String, 
        required: [true, "A cake should have a Baker."],
        minlength: [2, "Should at least be two characters long."]
    },
    imageurl: {
        type: String,
        required: [true, "A cake should also have an image."],
        minlength: [2, "Can not be less than 2 characters long."]
    },
    comments: [CommentSchema]
}, {timestamps: true})

mongoose.model("Cake", CakeSchema);