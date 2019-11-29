import React, { Component } from 'react';

class Para extends Component {

    render() { 

        let { children } = this.props;

        return (
            <p>{ children }</p>
        );
    }
}

Para.defaultProps = {
    children: "Hello, world"
  };
  
export default Para;