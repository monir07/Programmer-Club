import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { totalProgrammer } = props;
    let total = 0;
    for (const programmer of totalProgrammer) {
        total += programmer.salary;
    }
    return (
        <div>
            <div className="cart">
                <h2>My-Cart</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Total Programmer:</th>
                            <td>{props.totalProgrammer.length}</td>
                            <td></td>
                            <td></td>
                        </tr>
                        {totalProgrammer.map(programmer =>
                            <tr>
                                <td>{programmer.name}</td>
                                <td>${programmer.salary}</td>
                                <td></td>
                                <td><i className="fa fa-times-circle text-danger"></i></td>
                            </tr>
                        )
                        }
                        <tr>
                            <th scope="row">Total Salary</th>
                            <th colSpan="2" className="font-weight-bold">${total}</th>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <div className="text-center">
                    <button className="btn btn-primary text-center">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;