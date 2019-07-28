import React from 'react';
import Styles from './Burger.module.css';
import BurgerIngridient from './Burgeringredients/Burgeringridient';

const burger = (props) => {
    const {ingridients} = props;
    //Object is provided by JavaScript and not react
    let transformerIngrdients = Object.keys(ingridients)
        .map(igKey => {
            return [...Array(ingridients[igKey])].map((_, i) => {
                return <BurgerIngridient key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el) =>{
            return arr.concat(el);
        }, []);
    if(transformerIngrdients.length===0)
    {
        transformerIngrdients = <p>Please start adding ingridients</p>
    }
    return (
        <div className={Styles.Burger}>
            <BurgerIngridient type="bread-top"/>
            {transformerIngrdients}
            <BurgerIngridient type="bread-bottom"/>
        </div>
    );
};

export default burger;
