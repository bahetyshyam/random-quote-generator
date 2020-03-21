import React from 'react';

const Button = (props) => {
    return (
        <span
            onClick={props.onClick}
            style={{ width: props.width, height: props.height, float: props.float, marginRight: props.marginRight }}
            className={'button' + ' ' + 'button-' + props.currentTheme}>
            {props.children}
        </span>
    )
}

export default Button;