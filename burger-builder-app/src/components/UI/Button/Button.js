import React from 'react';
// import Aux from '../../../hoc/Auxiliary';
import Styles from './Button.module.css';

const button = (props) => {
    return (
        <button 
            className={[Styles.Button, Styles[props.btnType]].join(' ')}
            onClick={props.clicked}>
            {props.children}
        </button>
    );
};

export default button;

// onClick={props.clicked}