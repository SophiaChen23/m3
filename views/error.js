import React from 'react';

function error({ title, error }) {
    return (
        <html>
        <head>
            <title>{title}</title>
        </head>
        <body>
        <h1>Oops! Something went wrong.</h1>
        {error ? (
            <div>
                <p>Error Message: {error.message}</p>
                <p>Stack Trace: {error.stack}</p>
            </div>
        ) : (
            <p>An unexpected error occurred.</p>
        )}
        </body>
        </html>
    );
}

export default error;
