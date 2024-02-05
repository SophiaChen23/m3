import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carts from "./Carts"
import Home from "./Home";

import { faShoppingCart, faRegistered} from '@fortawesome/free-solid-svg-icons';
function Nav(props) {
    const { total} = props;
    return (
        <div className="bar">
            <h1 className="shoppingTitle">
                <a href="/" style={{ color: 'white' }}>
                    Shop 2  <FontAwesomeIcon icon={faRegistered}/> eact
                </a>
            </h1>
            <div-right style={{ display: 'flex', alignItems: 'center' }}>
                <a href="/cart">
                    <FontAwesomeIcon icon={faShoppingCart}/>
                </a>
                <div>
                    <p style={{ color: 'white', fontSize: '12px', margin: '0' }}>{total} items</p>
                </div>
            </div-right>
        </div>

            // <Router>
            //
            //     <Routes>
            //         <Route path="/" element={<Home/>} />
            //         <Route path="/cart" element={<Carts/>} />
            //     </Routes>
            //
            // </Router>

    );
}

export default Nav;
