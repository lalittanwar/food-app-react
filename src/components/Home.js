import React,{Component} from 'react';
import {Card,Button,Container,Row,Col} from 'react-bootstrap';
import Food from '../components/Food';
import {foodList} from "../components/Data";
import {ProductConsumer,ProductProvider} from './Context';

export class Home extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <Container>
            <Row>
              {value.food.map(food => <Food food={food} key={food.id} />)}
            </Row>
          </Container>)}
      </ProductConsumer>
    )
  }
}

export default Home
