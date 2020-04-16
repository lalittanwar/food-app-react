import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Switch,withRouter} from 'react-router-dom';
import {ProductConsumer} from '../Context';
import {Button} from "react-bootstrap";

export class Cart extends Component {
    render() {
        return (
            <div>
                <h3 style={{textAlign: 'center'}}>My Cart</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-md">
                            <p>Food Item</p>
                        </div>
                        <div className="col-md">
                            <p>Name</p>
                        </div>
                        <div className="col-md">
                            <p>Price</p>
                        </div>
                        <div className="col-md">
                            <p>Quantity</p>
                        </div>
                        <div className="col-md">
                            <p>Remove</p>
                        </div>
                        <div className="col-md">
                            <p>Total</p>
                        </div>
                    </div>
                </div>
                <ProductConsumer>
                    {value => (
                        value.cart.map(item =>
                            <React.Fragment>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md">
                                            <img style={{width: '5rem',height: '5rem'}} src={item.image} />
                                        </div>
                                        <div className="col-md">
                                            <p>{item.name}</p>
                                        </div>
                                        <div className="col-md">
                                            <p>{item.price}</p>
                                        </div>
                                        <div className="col-md">
                                            <div className="row" >
                                                <div className="col-1">
                                                    <Button onClick={() => value.decreament(item.id)}>-</Button>
                                                </div>
                                                <div className="col-1" style={{margin:'5px 0px 0px 15px'}}>
                                                    <p><b>{item.quantity}</b></p>
                                                </div>
                                                <div className="col-1">
                                                    <Button onClick={() => value.increament(item.id)}>+</Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md">
                                            <Button className="btn-danger" onClick={() => value.removeCart(item.id)}>Remove</Button>
                                        </div>
                                        <div className="col-md">
                                            <p>{item.price * item.quantity}</p>
                                        </div>
                                    </div>
                                </div><br />
                            </React.Fragment>
                        )
                    )}
                </ProductConsumer>
            </div>
        )
    }
}

export default Cart
