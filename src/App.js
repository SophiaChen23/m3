import React from "react";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Main App component
export default function App() {
    return (
        <Router>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto" style={{ display: 'flex', justifyContent: 'space-around', listStyleType: 'none', padding: 0, margin: 0 }}>
                        <li className="nav-item" style={{ display: 'flex' }}>
                            <Link to="/netflix">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" alt="Netflix" width="100"/>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/hbo-max">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg" alt="HBO Max" width="100"/>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/hulu">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg" alt="Hulu" width="100"/>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/prime-video">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png" alt="Prime Video" width="100"/>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/:appId">
                        <Child />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

// Child component to display the selected app name
function Child() {
    // Correct use of the useParams hook
    let { appId } = useParams();

    // Mapping URL appId to human-readable app names
    const appNameMap = {
        "netflix": "Netflix",
        "hbo-max": "HBO Max",
        "hulu": "Hulu",
        "prime-video": "Prime Video"
    };

    // Get the human-readable name from appId
    const appName = appNameMap[appId] || "App";

    return (
        <div>
            <h3>You Selected: <span>{appName}</span></h3>
        </div>
    );
}
