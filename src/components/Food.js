import React,{Component} from 'react';
import {Card,Button,Container,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {ProductConsumer,ProductProvider} from './Context';

export class Food extends Component {
    render() {
        const {image,name,price,id,inCart,buttonText,variant} = this.props.food;

        return (
            <div style={{margin: 10}}>
                <Col >
                    <ProductConsumer>
                        {value => (
                            <Card style={{width: '13rem'}} onClick={() => value.handleDetail(id)}>
                                <Link to="/detail">
                                    <Card.Img variant="top" style={{height: '10rem'}} src={image} />
                                </Link>
                                <Card.Body>
                                    <Card.Title>{name} {price} 	{'\u20B9'}</Card.Title>
                                    {/* <Button variant={variant} disabled={inCart ? true : false} onClick={() => value.addToCart(id)}>{buttonText}</Button> */}
                                    <Button variant={variant} disabled={inCart ? true : false} onClick={() => value.addToCart(id)}>{buttonText}</Button>
                                </Card.Body>
                            </Card>
                        )}
                    </ProductConsumer>
                </Col>
            </div>
        )
    }
}

export default Food
