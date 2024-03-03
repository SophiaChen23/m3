const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const path = require('path');
const app = express();
const auth = require('http-auth');
const bcrypt = require('bcrypt');
const basic = auth.basic({
    file: path.join(__dirname, '../users.htpasswd'),
});
const {check, validationResult} = require("express-validator");
const multer = require('multer');
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024 // limiting images to 5MB
    }
});
const  postsModel = mongoose.model('posts');

router.get('/edit/:postId', async (req, res) => {
    const post = await postsModel.findById(req.params.postId);
    res.render('edit', { title: 'Edit Post', post });
});

router.post('/edit/:postId', upload.single('image'), async (req, res) => {
    const { title, content } = req.body;
    const imageData = req.file;

    const updatedPost = {
        title,
        content,

    };
    if (imageData) {
        updatedPost.image = {
            data: imageData.buffer,
            contentType: imageData.mimetype,
        };
    }


    await postsModel.findByIdAndUpdate(req.params.postId, updatedPost);
    res.redirect('/login');
});

router.get('/delete/:postId', async (req, res) => {
    await postsModel.findByIdAndRemove(req.params.postId);
    res.redirect('/');
});

router.get('/manage', async (req, res) =>{
    try {
        const posts = await postsModel.find({});
        res.render('allPostManage', { posts: posts, title: 'All Posts' });
    } catch (err) {
        res.status(500).render('error', { title: 'Something went wrong', error: err });
    }
});
router.get('/', function(req, res) {
    res.render('menu',{title: 'home page'});
});
router.get('/register', function(req, res) {
    res.render('form',{title: 'Registration form'});
});
router.get('/registrations', async (req, res) => {
    try {
        const posts = await postsModel.find({});
        res.render('allPosts', { posts: posts, title: 'All Posts' });
    } catch (err) {
        res.status(500).render('error', { title: 'Something went wrong', error: err });
    }
});
// Assuming `basic.check` is a middleware for authentication
router.get('/login', basic.check((req,res) => {
    postsModel.find()
        .then((posts)=>{

            res.render('home1', {title: "Listening registrations", posts});
        })
        .catch((err)  =>{
            console.error("Error fetching registrations:", err);
            res.send('Sorry! Something went wrong.');});
}));



router.get('/admin', async function (req, res) {
    try {
        // Use basic authentication to check username and password
        await basic.check(req, (username, password, callback) => {
            if (username && password) {
                // Authentication successful, retrieve data from the database
                postsModel.find({}, (err, posts) => {
                    if (err) {
                        // Handle database query error
                        console.error(err);
                        res.status(500).send('Internal Server Error');
                    } else {
                        // Render the page with retrieved data
                        res.render('allPosts', { posts: posts, title: 'All Posts' });
                    }
                });
            } else {
                // Authentication failed, provide an error message
                res.end('Authentication failed. Please provide valid credentials.');
            }
        });
    } catch (err) {
        // Handle any other errors that may occur
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/postBlog', basic.check((req,res) => {
    postsModel.find()
        .then((registrations)=>{

            res.render('update',{title: 'Create new posts'});
        })
        .catch((err)  =>{
            console.error("Error fetching registrations:", err);
            res.send('Sorry! Something went wrong.');});
}));



router.post('/postBlog',
    basic.check((username, password, callback) => {

    }),
    upload.single('image'),  // 'image' should match the 'name' attribute of your file input
    [
        check('title')
            .isLength({ min: 1 })
            .withMessage('Please enter a title'),
        check('content')
            .isLength({ min: 1 })
            .withMessage('Please write something'),
    ],

    async (req, res) => {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            try {

                console.log(req.body); // Log form data
                console.log(req.file); // Log uploaded file data

                const newPost = new postsModel({
                    title: req.body.title,
                    content: req.body.content,
                    image: {
                        data: req.file.buffer,
                        contentType: req.file.mimetype
                    }
                });
                await newPost.save();
                res.send('New post added to MongoDB:', newPost);
                // console.log('New post added to MongoDB:', newPost);

                // Send a success response
                res.render('thankyou', { title: 'Post Submission Successful' });
                res.render('thankyou', { title: 'Post Submission Successful' });
            } catch (err) {
                console.error(err); // Log the error for debugging
                res.status(400).render('error', { title: 'Something went wrong', error: err });
            }
        } else {
            res.render('form', {
                title: 'Post Submission Form',
                errors: errors.array(),
                data: req.body,
            });
        }
    }
);


module.exports = router;


