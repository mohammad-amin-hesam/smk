import React from 'react'
import './backdrop.css'

const BackDrop = (props) => (
    props.show ? <div className="back_drop" onClick={props.clicked}></div> : null
);

export default BackDrop
