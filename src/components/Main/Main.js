import React from 'react';
import './Main.css'

const Main = (props) => {
    const {name, image, price, instructor} = props.course;
    return (
        <div className="card box" style={{width: "18rem;"}}>
            <img src={image} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p><small><b>Instructed By {instructor}</b></small></p>
                <h6>${price}</h6>
                <button className="btn btn-danger">Enroll Now</button>
            </div>
        </div>
    );
};

export default Main;