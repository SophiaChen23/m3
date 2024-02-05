import React, { useState, useEffect } from 'react';
import './styles.css'; // You may need to create this file for styling
import jsonData from './data.json';
import Nav from "./Nav";
import Carts from "./Carts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus, faShoppingCart, faRegistered} from '@fortawesome/free-solid-svg-icons';// const fs = require('fs');


import "bootstrap/dist/css/bootstrap.min.css";


import "./styles.css";
function Home(props) {

    const { data: initialData, total } = props; // Renamed data to initialData to avoid conflict
    const [data, setData] = useState(initialData);
    const [lightboxItem, setLightboxItem] = useState(null);





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

    const minusValue = (id) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.id === id ? { ...item, value: item.value - 1 } : item
            )
        );
    };


    return (

        <div className="Home">
            <Nav data={data} total={total + 1}  />

            {/*<Carts data={data} total={total} lightboxItem={lightboxItem} />*/}
            <ul className="self-define">

                {data.map((item) => (
                    <li key = {item.id} >
                        <strong style={{ display: 'block' }}>{item.desc}</strong>
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
                            <div>
                                <span className="value-label">Quantity:</span>
                                <span>{item.value}</span>
                            </div>

                            {/*<div className= "inOrder">*/}
                            {/*    <button className = "button_design" onClick={() => addValue(item.id)}>*/}
                            {/*        <FontAwesomeIcon icon={faCirclePlus} />*/}

                            {/*    </button>*/}
                            {/*    <button className = "button_design" onClick={() => minusValue(item.id)}>*/}
                            {/*        <FontAwesomeIcon icon={faCircleMinus } />*/}

                            {/*    </button>*/}


                            {/*    <div className="value-box">*/}
                            {/*        <span className="value-label">Quantity:</span>*/}
                            {/*        <span className="value-square">{item.value}</span>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                        </div>

                        <div className="element-with-light-line"></div>
                    </li>

                ))}
            </ul>


            <ul>
                {data.map((item) => (
                    <li key = {item.id} >
                        <strong style={{ display: 'block' }}>{item.desc}</strong>
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
