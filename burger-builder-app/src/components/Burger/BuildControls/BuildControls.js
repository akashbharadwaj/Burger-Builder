import React from 'react';
import Styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];
const buildControls = (props) => (
    <div className={Styles.BuildControls}>
        {/* toFixed converts number to string with specified decimal digits */}
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl =>{
            return (
                <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label}
                    added={() => props.ingridientAdded(ctrl.type)}
                    removed={() => props.ingridientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}/>
        )})}
        <button className={Styles.OrderButton} disabled={!props.purchasable} onClick={props.orderPurchase}>ORDER NOW</button>
    </div>
);

export default buildControls;