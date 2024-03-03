import React, { useState } from 'react';

function update() {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        // Example: Send data to server, handle errors
    };

    return (
        <div>
            {errors.length > 0 && (
                <ul className="error-list">
                    <li className="cat"></li>
                    {errors.map((error, index) => (
                        <li key={index}>
                            <span style={{ color: 'red', fontWeight: 'bold' }}>!Error: </span>{error.msg}
                        </li>
                    ))}
                </ul>
            )}
            <h2 className="pig">Create Your Post</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data" className="form-registration">
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className="form-control"
                    required
                    onChange={(e) => setData({ ...data, title: e.target.value })}
                />

                <label htmlFor="content">Content:</label>
                <textarea
                    id="content"
                    name="content"
                    className="form-control"
                    rows="10"
                    required
                    onChange={(e) => setData({ ...data, content: e.target.value })}
                />

                <label htmlFor="image">Upload Image:</label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    className="form-control"
                    required
                    onChange={(e) => setData({ ...data, image: e.target.files[0] })}
                />

                <input
                    type="submit"
                    value="Post Blog"
                    className="btn btn-sm btn-custom-blue btn-block"
                />
            </form>
        </div>
    );
}

export default update;
