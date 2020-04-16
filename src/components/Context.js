import React,{Component} from 'react';
import {foodList,detailFood} from "../components/Data";

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        food: foodList,
        detailFood: detailFood,
        cart: []
    }

    handleDetail = (id) => {
        const food = this.state.food.find(item => item.id == id);
        this.setState(() => {
            return {detailFood: food}
        })
    }

    addToCart = (id) => {
        let tempFood = [...this.state.food];
        const selectedFood = this.state.food.find(item => item.id == id);
        const index = this.state.food.indexOf(selectedFood);
        tempFood[index].inCart = true;
        tempFood[index].quantity = 1;
        tempFood[index].buttonText = 'In cart';
        tempFood[index].variant = 'success';    
        this.setState(() => {
            return {food: tempFood,cart: [...this.state.cart,tempFood[index]]}
        },console.log('food',this.state.food))
        console.log('food1',this.state.food)
    }

    removeCart = (id) => {
        let tempFood = [...this.state.food];
        const selectedFood = this.state.food.find(item => item.id == id);
        const index = this.state.food.indexOf(selectedFood);
        tempFood[index].inCart = false;
        tempFood[index].quantity = 0;
        tempFood[index].buttonText = 'Add to cart';
        tempFood[index].variant = 'primary';    

        let tempFoodCard = [...this.state.cart];
        const cardSelectedFood = this.state.cart.find(item => item.id == id);
        const cardIndex = this.state.cart.indexOf(cardSelectedFood);

        tempFoodCard.splice(cardIndex,1);

        this.setState(() => {
            return {food: tempFood,cart: tempFoodCard}
        })
    }

    increament = (id) => {
        let tempFood = [...this.state.food];
        const selectedFood = this.state.food.find(item => item.id == id);
        const index = this.state.food.indexOf(selectedFood);
        tempFood[index].quantity = tempFood[index].quantity + 1;

        this.setState(() => {
            return {food: tempFood}
        })
    }

    decreament = (id) => {
        let tempFood = [...this.state.food];
        const selectedFood = this.state.food.find(item => item.id == id);
        const index = this.state.food.indexOf(selectedFood);
        tempFood[index].quantity = tempFood[index].quantity - 1;
        tempFood[index].buttonText = 'Add to cart';
        tempFood[index].variant = 'primary';  

        let tempFoodCard = [...this.state.cart];
        const cardSelectedFood = this.state.cart.find(item => item.id == id);
        const cardIndex = this.state.cart.indexOf(cardSelectedFood);

        if(!tempFood[index].quantity) {
            tempFood[index].inCart = false;
            tempFoodCard.splice(cardIndex,1);
        }

        this.setState(() => {
            return {food: tempFood,cart: tempFoodCard}
        })
    }

    render() {
        return (
            <div>
                <ProductContext.Provider value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    removeCart: this.removeCart,
                    increament: this.increament,
                    decreament: this.decreament,
                    
                }}>
                    {this.props.children}
                </ProductContext.Provider>
            </div>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductConsumer,ProductProvider}
