import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Cart = (props) => {
    const cartInfo = props.newEnrolled;
    let coursePrice = 0;
    for (let i = 0; i < cartInfo.length; i++) {
        const currentEnroll = cartInfo[i];
        coursePrice = coursePrice + currentEnroll.price;
    }
    return (
        <div>
            <div className="mr-sm-2 cart">
                <p className="text-primary">Course Enrolled: <FontAwesomeIcon icon={faShoppingCart} /> {cartInfo.length} </p>
                <p className="text-primary">Total Price: ${coursePrice} </p>
            </div>
        </div>
    );
};

export default Cart;