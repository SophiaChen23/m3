import React from 'react';

function blog({ data, errors }) {
    return (
        <div>
            {errors && (
                <ul className="error-list">
                    <li className="cat"></li>
                    {errors.map((error, index) => (
                        <li key={index}>
                            <span style={{ color: 'red', fontWeight: 'bold' }}>!Error: </span>{error.msg}
                        </li>
                    ))}
                </ul>
            )}
            <h2 className="pig">Create new posts</h2>
            <form action="/postBlog" method="POST" className="form-registration">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={data.title}
                />

                <label htmlFor="content">Email:</label>
                <input
                    type="email"
                    id="content"
                    name="email"
                    className="form-control"
                    value={data.content}
                />

                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control"
                    value={data.username}
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    value={data.password}
                />

                <input
                    type="submit"
                    value="Register"
                    className="btn btn-lg btn-primary btn-block"
                />
            </form>
        </div>
    );
}

export default blog;
