import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';


const BlogPosts = {
    '1': {
        title: 'First Blog Post',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    '2': {
        title: 'Second Blog Post',
        description: 'Hello React Router v6'
    }
};

function Home() {
    return (
        <div style={{ padding: 20 }}>
            <h2>Home View</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    );
}

function About() {
    return (
        <div style={{ padding: 20 }}>
            <h2>About View</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    );
}

function PostLists() {
    return (
        <ul>
            {Object.entries(BlogPosts).map(([slug, { title }]) => (
                <li key={slug}>
                    {/* Fixed the space issue in the `to` prop */}
                    <Link to={`/posts/${slug}`}>
                        {title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

function Post() {
    let { slug } = useParams();
    const post = BlogPosts[slug];
    return (
        <div style={{ padding: 20 }}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
        </div>
    );
}

function App() {
    return (
        <Router>
            <nav style={{ margin: 10 }}>
                {/* Correct placement of Link components */}
                <Link to="/" style={{ padding: 5 }}>Home</Link>
                <Link to="/about" style={{ padding: 5 }}>About</Link>
                <Link to="/posts" style={{ padding: 5 }}>Posts</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/posts" element={<PostLists />} />
                <Route path="/posts/:slug" element={<Post />} />
            </Routes>
        </Router>
    );
}

export default App;
