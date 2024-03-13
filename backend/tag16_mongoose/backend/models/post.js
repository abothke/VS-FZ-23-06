import mongoose, {Schema} from 'mongoose';

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: "Lorem Ipsum"
    },
    body: {
        type: String,
        required: true
    },
    modifiedAt: Date,
    published: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true
    }
})

export const Post = mongoose.model('Post', postSchema)