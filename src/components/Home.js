import React,{Component} from 'react';
import {Card,Button,Container,Row,Col} from 'react-bootstrap';
import Food from '../components/Food';
import {foodList} from "../components/Data";

export class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            {foodList.map(food => <Food food={food} />)}
          </Row>
        </Container>
      </div>
    )
  }
}

export default Home
