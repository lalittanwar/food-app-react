import React,{Component} from 'react';
import {ProductConsumer} from '../components/Context';

export class Detail extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <ProductConsumer>
                {
                    (value) => {
                        console.log(value.name);
                        return <p>Hello {value.name}</p>
                    }
                }
            </ProductConsumer>
        )
    }
}

export default Detail
