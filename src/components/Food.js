import React,{Component} from 'react';
import {Card,Button,Container,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export class Food extends Component {
    render() {
        const {image,name,price,id} = this.props.food;
        return (
            <div style={{margin: 10}}>
                <Col >
                    <Card style={{width: '13rem'}}>
                        <Link to="/detail">
                            <Card.Img variant="top" style={{height: '10rem'}} src={image} />
                        </Link>
                        <Card.Body>
                            <Card.Title>{name} {price} 	{'\u20B9'}</Card.Title>
                            <Button variant="success">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        )
    }
}

export default Food
