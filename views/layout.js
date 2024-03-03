import React from 'react';

function layout({ title, children }) {
    return (
        <html>
        <head>
            <title>{title}</title>
            <link rel='stylesheet' href='/css/bootstrap.min.css' />
            <link rel='stylesheet' href='/css/styles.css' />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js" integrity="sha384-rpU8HRagrOdyK5MI8RW5j5n5Bz5TdOnkD67z2L7w5bvFMyGq5zqtkKtU4l5f5f5f5"></script>
        </head>
        <body>
        <main>
            <div className="container listing-reg">
                {children}
            </div>
        </main>
        </body>
        </html>
    );
}

export default layout;
