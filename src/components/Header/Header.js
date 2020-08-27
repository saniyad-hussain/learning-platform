import React from 'react';
import './Header.css'
import Cart from '../Cart/Cart';

const Header = (props) => {
    const newEnrolled = props.enroll;

    return (
        <div className="header">
            <nav className="navbar navbar-light bg-dark">
                <h2 className="text-primary">Kudemy</h2>
                <Cart newEnrolled={newEnrolled}></Cart>
            </nav>

        </div>
    );
};

export default Header;