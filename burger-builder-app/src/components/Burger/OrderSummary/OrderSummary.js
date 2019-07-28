import React from 'react';
import AUX from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) =>{
    const danger = 'Danger';
    const success = 'Success';

    const ingridientSummary = Object.keys(props.ingridients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: "capitalize"}}>{igKey}</span>: {props.ingridients[igKey]}
                </li>
            );
        });
    return (
        <AUX>
             <h3>Your Order</h3>
             <p>A delicious burger with the following ingredients:</p>
             <ul>
                {ingridientSummary}
             </ul>
             <p>Total Price: <strong>{props.price.toFixed(2)}</strong></p>
             <p>Continue to Checkout?</p>
             <Button btnType={danger} clicked={props.purchaseCancelled}>CANCEL</Button>
             <Button btnType={success} clicked={props.purchaseContinued}>CONTINUE</Button>
        </AUX>
    );
};

export default orderSummary;