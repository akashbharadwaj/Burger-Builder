import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Styles from './Burgeringridient.module.css';

class BurgerIngridient extends Component {
    
    render (){
        let ingridient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingridient = <div className={Styles.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingridient = (
                    <div className={Styles.BreadTop}>
                        <div className={Styles.Seeds1}></div>
                        <div className={Styles.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingridient = <div className={Styles.Meat}></div>;
                break;
            case ('cheese'):
                ingridient = <div className={Styles.Cheese}></div>;
                break;
            case ('bacon'):
                ingridient = <div className={Styles.Bacon}></div>;
                break;
            case ('salad'):
                ingridient = <div className={Styles.Salad}></div>
                break;
            default:
                ingridient = null;
            
        }

        return ingridient;
    }
};

BurgerIngridient.propType = {
    type: PropTypes.string.isRequired
};

export default BurgerIngridient;