import React from 'react';

function home() {
    return (
        <html>
        <head>
            <link rel='preconnect' href='https://fonts.gstatic.com' />
            <link href='https://fonts.googleapis.com/css2?family=Sacramento&display=swap' rel='stylesheet' />
            <link rel='stylesheet' href='/css/styles.css' />
            {/* <link rel='stylesheet' href='/css/bootstrap.min.css' /> */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js" integrity="sha384-rpU8HRagrOdyK5MI8RW5j5n5Bz5TdOnkD67z2L7w5bvFMyGq5zqtkKtU4l5f5f5f5"></script>
        </head>
        <body>
        <main>
            <header>
                <nav>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li style={{color: 'white'}}>|</li>
                        <li><a href='/registrations'>Blogs</a></li>
                        <li style={{color: 'white'}}>|</li>
                        <li><a href='/login'>Login</a></li>
                    </ul>
                </nav>
            </header>
            <div id="intro-container">
                <section id="intro-image">
                    {/* Your content for intro-image */}
                </section>
                <section id="intro-text">
                    <span>Sophia' blog</span>
                    <h3>
                        Simple &amp; Comforting<br />
                        A place to rest and chill
                    </h3>
                    <p>
                        Hold fast to dreams.<br />
                        For if dreams die.<br />
                        Life is a broken-winged bird.<br />
                        That cannot fly.<br />
                        Hold fast to dreams.<br />
                        For when dreams go.<br />
                        Life is a barren field.<br />
                        Frozen with snow.
                    </p>
                    <button className="submit-button" onClick={() => {window.location.href='/registrations'}}>Check Posts</button>
                </section>
            </div>
        </main>
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

export default home;
