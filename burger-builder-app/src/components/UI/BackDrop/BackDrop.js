import React from 'react';
import Styles from './BackDrop.module.css';

const backDrop = (props) => {

    return (
        props.show? <div className={Styles.BackDrop} onClick={props.closeModal}></div> : null
    );
};

export default backDrop;