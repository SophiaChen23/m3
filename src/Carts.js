import React, {useEffect, useState} from 'react';
import jsonData from "./data.json";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleMinus, faCirclePlus} from "@fortawesome/free-solid-svg-icons";
import Nav from "./Nav";




function Carts(props) {
    const { data, total} = props;
    useEffect(() => {
        // Set the initial state using imported jsonData
        // setData(jsonData);
    }, []);
    const [lightboxItem, setLightboxItem] = useState(null);

    const openLightbox = (item) => {
        setLightboxItem(item);
    };

    // // Function to close the lightbox
    const closeLightbox = () => {
        setLightboxItem(null);
    };



    return (
        <div className="Home">
            <Nav data={data} total={total} lightboxItem={lightboxItem} />
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
        </div>
    );
}

export default Carts;
