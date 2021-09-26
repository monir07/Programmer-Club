import React from 'react';
import './Card.css'

const Card = (props) => {
    const { name, designation, salary, image } = props.user
    return (
        <div className="col-md-4">
            <div className="card card-border">
                <img src={image} className="card-img-top " alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p>Designation: {designation}</p>
                    <p>Salary: {salary}</p>
                </div>
                <div className="text-center">
                    <button onClick={() => props.handleAddToCard(props.user)} className="btn btn-primary text-center"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;