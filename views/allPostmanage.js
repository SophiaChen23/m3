import React from 'react';

function allPostmanage({ title, posts }) {
    return (
        <html>
        <head>
            <link rel='preconnect' href='https://fonts.gstatic.com' />
            <link href='https://fonts.googleapis.com/css2?family=Sacramento&display=swap' rel='stylesheet' />
            <link rel='stylesheet' href='/css/styles.css' />
            <title>{title}</title>
            <style>
                {`
                    .post-image {
                        max-width: 30%;
                        height: auto;
                    }
                    body {
                        font-size: 18px;
                    }
                    `}
            </style>
        </head>
        <body>
        <nav>
            <ul>
                <li><a href='/'>Home</a></li>
                <li style={{ color: 'white' }}>|</li>
                <li><a href='/postBlog'>Create</a></li>
                <li style={{ color: 'white' }}>|</li>
                <li><a href='/manage'>Manage</a></li>
                <li style={{ color: 'white' }}>|</li>
            </ul>
        </nav>
        <section className="news">
            {posts.map(post => (
                <div key={post._id} className="post-container">
                    <div className="post">
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        {post.image && post.image.data && post.image.contentType && (
                            <img src={`data:${post.image.contentType};base64,${post.image.data.toString('base64')}`} className="post-image" style={{ maxWidth: '30%' }} />
                        )}
                        <a href={`/edit/${post._id}`} className="edit-button">Edit</a>
                        <a href={`/delete/${post._id}`} className="delete-button">Delete</a>
                    </div>
                </div>
            ))}
        </section>
        <footer>
            <div className="my-footer-container">
                <div className="contact-methods">
                    <h3>Contact Me</h3>
                    <ul className="list-unstyled">
                        <li><a href="mailto:your-email@example.com"><i className="bi bi-envelope-fill"></i>Email</a></li>
                        <li><a href="https://www.linkedin.com/in/your-linkedin-profile"><i className="bi bi-linkedin"></i>LinkedIn</a></li>
                        <li><a href="https://twitter.com/your-twitter-profile"><i className="bi bi-twitter"></i>Twitter</a></li>
                        {/* Add more social media links as needed */}
                    </ul>
                </div>
                <div className="copyright">
                    <p>&copy; 2023 Sophia. All rights reserved.</p>
                </div>
            </div>
        </footer>
        </body>
        </html>
    );
}

export default allPostmanage;
