import React from 'react';

function edit({ post }) {
    const handleSubmit = (event) => {
        // Handle form submission here
        event.preventDefault();
        // Add your logic for form submission
    };

    return (
        <html>
        <head>
            <link rel='preconnect' href='https://fonts.gstatic.com' />
            <link href='https://fonts.googleapis.com/css2?family=Sacramento&display=swap' rel='stylesheet' />
            <link rel='stylesheet' href='/css/styles.css' />
            <link rel='stylesheet' href='/css/bootstrap.min.css' />
        </head>
        <body>
        <main>
            <header>
                <nav>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li style={{ color: 'white' }}>|</li>
                        <li><a href='/registrations'>Blogs</a></li>
                        <li style={{ color: 'white' }}>|</li>
                        <li><a href='/postBlog'>Create</a></li>
                        <li style={{ color: 'white' }}>|</li>
                        <li><a href='/manage'>Manage</a></li>
                        <li style={{ color: 'white' }}></li>
                    </ul>
                </nav>
            </header>
            <div>
                <h1>Edit Blog Post</h1>
                <form method='post' encType='multipart/form-data' action={`/edit/${post._id}`} onSubmit={handleSubmit}>
                    <label htmlFor='title'>Title:</label>
                    <input type='text' name='title' id='title' defaultValue={post.title} />

                    <label htmlFor='content'>Content:</label>
                    <textarea name='content' id='content' rows='4'>{post.content}</textarea>

                    <label htmlFor='image'>Upload Image (required):</label>
                    <input type='file' name='image' id='image' />

                    {post.image && post.image.data && post.image.contentType && (
                        <img src={`data:${post.image.contentType};base64,${post.image.data.toString('base64')}`} className='post-image' style={{ maxWidth: '30%' }} />
                    )}

                    <button type='submit'>Update Post</button>
                </form>
            </div>
        </main>
        </body>
        </html>
    );
}

export default edit();

