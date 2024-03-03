
require('dotenv').config();
require('./models/posts');
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser:true,
    useUnifiedTopology: true
});
mongoose.set('debug', true);
mongoose.connection
    .on('open', ()=>{
        console.log("Mongoose connection open");
    })
    .on('error', (err) => {
        console.log(`connection error :${err.message}`);
    })
    .on('disconnected', () => {
        console.log('Mongoose connection disconnected');
    });

const app = require('./app');
const server = app.listen(4000, function(){
    console.log(`express is running on port ${server.address().port}`);
});






mongoose.set('debug', true);
// ...

// Import the Post model
const Post = require('./models/posts');

// Add a function to retrieve and log data
async function retrieveAndLogData() {
    try {
        // Find all posts in the database
        const posts = await Post.find({});

        // Log the retrieved data to the console
        console.log('Retrieved Data:');
        posts.forEach((post) => {
            console.log(`Title: ${post.title}`);
            console.log(`Content: ${post.content}`);
        });
    } catch (error) {
        console.error('Error retrieving data:', error);
    }
}

// Call the function to retrieve and log data
retrieveAndLogData();
