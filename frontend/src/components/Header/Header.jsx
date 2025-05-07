import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";
const Header = () => {
    return (
    <div className="header">
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>
            Explore a diverse menu filled with a delectable array of dishes, from sizzling appetizers to mouthwatering mains and indulgent desserts. Savor fresh ingredients, bold flavors, and expertly crafted meals tailored to your cravings. Whether you prefer classic comfort food or exotic cuisine, your perfect meal is just a click away!
            </p>
            <button>View Menu</button>
        </div>
    </div>
    );
};
export default Header;