const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
    title: {
        type: String,
        required: 'You need to leave a title!',
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    price: {
        type: Number,
        required: 'You need to leave a price!',
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    description: {
        type: String,
        required: 'You need to leave a description!',
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    category: {
        type: String,
        required: 'You need to choose a category!',
        trim: true,
    },
    image:
    {
        type: String,
    },
    // image:
    // {
    //     type: String,
    //     required: 'You need to choose a image!',
    //     minlength: 1,
    //     maxlength: 280,
    //     trim: true,
    // },
    // image:
    // {
    //     data: String,
    //     contentType: String
    // },
    postAuthor: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    comments: [
        {
            commentText: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 280,
            },
            commentAuthor: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
            },
        },
    ],
});

const Post = model('Post', postSchema);

module.exports = Post;
