import React, {Component} from 'react';
import AUX from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 1.99,
    cheese: 0.99,
    meat: 0.99,
    bacon: 2.99

}
class BurgerBuilder extends Component {
    state = {
        ingridients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 6,
        purchasable: false,
        purchasing: false
    }

    purchasingHandler = () => {
        this.setState({purchasing: true});
    }

    updatePurchaseState = (ingridients) =>{
        // const ingridients = {
        //     ...this.state.ingridients
        // };

        for(let key in ingridients)
        {
            //disabledInfo[key] = disabledInfo[key]<=0
            // console.log(ingridients[key]);
            if(ingridients[key] >0)
            {
                this.setState({purchasable: true});
                return;
            }
        }
        this.setState({purchasable: false});
    }
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingridients[type];
        const updatedCount = oldCount + 1;
        const updatedIngridients = {
            ...this.state.ingridients
        };
        updatedIngridients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingridients: updatedIngridients})
        this.updatePurchaseState(updatedIngridients);
    }

    removeIngridientHandler = (type) => {
        const oldCount = this.state.ingridients[type];
        if(oldCount<=0)
            return;
        const updatedCount = oldCount - 1;
        const updatedIngridients = {
            ...this.state.ingridients
        };
        updatedIngridients[type] = updatedCount;
        const priceSubtraction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceSubtraction;
        this.setState({totalPrice: newPrice, ingridients: updatedIngridients});
        this.updatePurchaseState(updatedIngridients);
    }

    closeModalHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('Continue');
    }
    render() {
        const disabledInfo = {
            ...this.state.ingridients
        };
        for(let key in disabledInfo) {
            //disabledInfo[key] = disabledInfo[key]<=0
            if(disabledInfo[key] <=0)
                disabledInfo[key] = true;
            else
            {
                disabledInfo[key] = false;
                //this.setState({purchasable: true});
            }
                
        }

        return (
            <AUX>
                <Modal show={this.state.purchasing} closeModal={this.closeModalHandler}>
                    <OrderSummary ingridients={this.state.ingridients} 
                    purchaseCancelled={this.closeModalHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                    price={this.state.totalPrice}/>
                </Modal>
                <Burger ingridients={this.state.ingridients}/>
                <BuildControls 
                    ingridientAdded={this.addIngredientHandler}
                    ingridientRemoved={this.removeIngridientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    orderPurchase={this.purchasingHandler}/>
            </AUX>
        );

    }
}

export default BurgerBuilder;