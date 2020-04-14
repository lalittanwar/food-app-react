import React,{Component} from 'react';
import {foodList,detailFood} from "../components/Data";

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        food: foodList,
        detailFood: detailFood
    }

    handleDetail = (id) => {
        const food = this.state.food.find(item => item.id == id);
        this.setState(() => {
            return {detailFood: food} } )
    }

render() {
    return (
        <div>
            <ProductContext.Provider value={{...this.state, handleDetail: this.handleDetail}}>
                {this.props.children}
            </ProductContext.Provider>
        </div>
    )
}
}

const ProductConsumer = ProductContext.Consumer;

export {ProductConsumer,ProductProvider}
