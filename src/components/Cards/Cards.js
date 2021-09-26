import React, { useEffect, useState } from 'react';
import './Cards.css'
import Card from '../Card/Card'
import Cart from '../Cart/Cart'

const Cards = () => {
    const [users, setUsers] = useState([]);
    const [programmer, setProgrammer] = useState([]);
    // let total = 0;

    useEffect(() => {
        fetch('./fake-data.json')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    const handleAddToCard = (salary) => {
        const newProgrammer = [...programmer, salary];
        setProgrammer(newProgrammer);
    }
    return (
        <div className="col-md-12">
            {/* PRODUCT SECTION START FROM HERE */}
            <div className="col-md-9">
                <div>
                    {
                        users.map(user => <Card key={user.id} user={user} handleAddToCard={handleAddToCard}></Card>)
                    }
                </div>
            </div>
            {/* CART SECTION START FROM HERE  */}
            <div className="col-md-3 stick-top">
                <Cart totalProgrammer={programmer}></Cart>
            </div>
        </div>
    );
};

export default Cards;