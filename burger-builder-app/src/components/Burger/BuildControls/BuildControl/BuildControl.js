import React from 'react';
import Styles from './BuildControl.module.css';

const buildControl = (props) => {

    return (
        <div className={Styles.BuildControl}>
            <div className={Styles.Label}>{props.label}</div>
            <button onClick={props.removed} className={Styles.Less} disabled={props.disabled}>Less</button>
            <button onClick={props.added} className={Styles.More}>More</button>
        </div>
    );
};

export default buildControl;