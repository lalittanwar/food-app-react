import React,{Component} from 'react';
import {ProductConsumer} from '../components/Context';

export class Detail extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {image,name,price,id} = value.detailFood
                    return (
                        <React.Fragment>
                            <img src={image} style={{width: '15rem',height: '15rem'}} />
                            {name}
                        </React.Fragment>
                    )
                }
                }
            </ProductConsumer>
        )
    }
}

export default Detail
