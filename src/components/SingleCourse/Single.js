import React from 'react';


const Single = (props) => {
    const {name, image, price, instructor} = props.course;
    const handleEnroll = props.handleEnroll;

    return (
        <div className="col-md-4">
            <div className="card box" style={{width: "18rem"}}>
            <img src={image} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p><small><b>Instructed By {instructor}</b></small></p>
                <h6>${price}</h6>
                <button onClick={() => handleEnroll(props.course)} className="btn btn-danger">Enroll Now</button>
            </div>
        </div>
        </div>
    );
};

export default Single;