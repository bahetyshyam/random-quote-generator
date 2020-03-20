import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <span onClick={this.props.onClick} style={{ width: this.props.width, height: this.props.height, float: this.props.float, marginRight: this.props.marginRight }} className="button">
                {this.props.children}
            </span>
        )
    }
}

export default Button;