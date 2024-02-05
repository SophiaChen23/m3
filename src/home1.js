import React, { useState, useEffect } from 'react';
import './styles.css'; // You may need to create this file for styling
import jsonData from './data.json';
import Nav from "./Nav";
import Carts from "./Carts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus, faShoppingCart, faRegistered} from '@fortawesome/free-solid-svg-icons';// const fs = require('fs');


import "bootstrap/dist/css/bootstrap.min.css";


import "./styles.css";
function Home() {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const [lightboxItem, setLightboxItem] = useState(null);

    const [sortByPrice, setSortByPrice] = useState('');

    const handleSort = (order) => {
        setSortByPrice(order);
    };

    useEffect(() => {
        // Set the initial state using imported jsonData
        setData(jsonData);
    }, []);

    const openLightbox = (item) => {
        setLightboxItem(item);
    };

    // Function to close the lightbox
    const closeLightbox = () => {
        setLightboxItem(null);
    };

    const addValue = (id) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.id === id ? { ...item, value: item.value + 1 } : item
            )
        );
    };
    useEffect(() => {
        // Calculate the total sum of all item values
        const sum = data.reduce((accumulator, item) => accumulator + item.value, 0);
        setTotal(sum);
    }, [data]);


    const minusValue = (id) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.id === id && item.value >0 ? { ...item, value: item.value - 1 } : item
            )
        );
    };


    return (

        <div className="Home">
            <Nav data={data} total={total} lightboxItem={lightboxItem} />
            <div className="centered-postion" style = {{marginTop: '30px', marginBottom: '30px'}}>
                <span style={{ marginRight: '10px' }}>Sort Price By:</span>
                <select onChange={(e) => handleSort(e.target.value)}>
                    <option value="">Normal</option>
                    <option value="lowToHigh">Lowest </option>
                    <option value="highToLow">Highest</option>
                </select>

            </div>
            <div className="element-with-light-line"></div>


            <ul >
                {data
                    .sort((a, b) => {
                            if (sortByPrice === 'lowToHigh') {
                                return a.price - b.price;
                            } else if (sortByPrice === 'highToLow') {
                                return b.price - a.price;
                            }
                            return 0;
                        })
                    .map((item) => (

                    <li key = {item.id} >
                        <strong style={{ display: 'inline-block', marginRight: '15px' }}>{item.desc}</strong>
                        <strong style={{ display: 'inline-block', color:"red" }}> ${item.price}</strong>

                        <div className="item-info">
                            <img className="product-image"
                                 src={item.image}
                                 onClick={() => openLightbox(item)}
                            />
                            {lightboxItem && lightboxItem.id === item.id && (
                                <div className="lightbox-overlay" onClick={closeLightbox}>
                                    <div className="lightbox">
                                        <div className="lightbox-header">
                                            <h4 style={{ fontSize: '14px', top: '0', left: '0',margin: '0  0' }}>{lightboxItem.desc}</h4>
                                            <button className="close-button" onClick={closeLightbox} style={{ fontSize: '10px',top: '0', right: '0',margin: 'top right' }}>X</button>
                                        </div>
                                        <div className="element-with-light-line"></div>
                                        <img className="product-image" src={lightboxItem.image} alt={lightboxItem.desc} />




                                        <h4 style={{ fontSize: '10px', top: '0', left: '0',margin: '0  0 '  }}>Ratings:{lightboxItem.ratings}/5</h4>


                                    </div>
                                </div>
                            )}


                            <div className= "inOrder">
                                <button className = "button_design" onClick={() => addValue(item.id)}>
                                    <FontAwesomeIcon icon={faCirclePlus} />

                                </button>
                                <button className = "button_design" onClick={() => minusValue(item.id)}>
                                    <FontAwesomeIcon icon={faCircleMinus } />

                                </button>


                                <div className="value-box">
                                    <span className="value-label">Quantity:</span>
                                    <span className="value-square">{item.value}</span>

                                </div>
                            </div>

                        </div>

                        <div className="element-with-light-line"></div>
                    </li>

                ))}
            </ul>
        </div>
    );
}

export default Home;
