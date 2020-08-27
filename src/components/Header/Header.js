import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = (props) => {
    const newEnrolled = props.enroll;
    let coursePrice = 0;
    for (let i = 0; i < newEnrolled.length; i++) {
        const currentEnroll = newEnrolled[i];
        coursePrice = coursePrice + currentEnroll.price;
    }
    return (
        <div className="header">
            <nav className="navbar navbar-light bg-dark">
                <h2 className="text-primary">Kudemy</h2>
                <div className="mr-sm-2 cart">
                    <p className="text-primary">Course Enrolled: <FontAwesomeIcon icon={faShoppingCart} /> {newEnrolled.length} </p>
                    <p className="text-primary">Total Price: ${coursePrice} </p>
                    

                </div>
            </nav>

        </div>
    );
};

export default Header;