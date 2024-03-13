import mongoose from 'mongoose';
import 'dotenv/config'
import { Post } from './models/post.js'


try {
 const connection = await mongoose.connect(process.env.MONGODB_URI)
    // const newPost = new Post({
    //     title: "der beste Porsche 2024",
    //     body: "Lorem Ipsum",
    //     published: false
    // })
    // await newPost.save()

    const posts = await Post.find({"title": "der beste Porsche 2024"}).lean()
    console.dir({posts});
    connection.connection.close()

} catch (error) {
    console.error(error)
}