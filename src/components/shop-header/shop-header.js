import React from 'react';
import { Link } from "react-router-dom";
import './shop-header.css';

const ShopHeader = () => {
    return (
        <header className="shop-header row">
            <Link to="/" href="#" className="logo text-dark">ReStore</Link>
        </header>
    )
};

export default ShopHeader;
