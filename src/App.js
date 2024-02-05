import React, { useState, useEffect } from 'react';
import Nav from "./Nav";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home1";
import Cart from "./Carts";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import jsonData from './data.json';


function App () {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    useEffect(() => {
            // Set the initial state using imported jsonData
            setData(jsonData);
        }, []);
    useEffect(() => {
            // Calculate the total sum of all item values
            const sum = data.reduce((accumulator, item) => accumulator + item.value, 0);
            setTotal(sum);
        }, [data]);
    return(
        <Router>
            <div className="App">
                <Routes>
                    {/* Pass products and total as props to Home */}
                     <Route path="/cart" element={<Cart data={data}  total={total} />} />
                    <Route path="/" element={<Home data={data}  total={total} />} />
                    {/* Pass products and total as props to Cart */}
                    <Route path="/cart" element={<Cart data={data}  total={total} />} />
                </Routes>
            </div>
       </Router>
    );

    // const { data, total, lightboxItem } = this.state; // Extract data, total, and lightboxItem from the state

}

export default App;
