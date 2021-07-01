import React from 'react';
import './Button.css'


function Button(props) {
    return <div>
        <button style={{ opacity: props.opacity }} className="large-Button">{props.text}</button>
    </div>;
}

export default Button;