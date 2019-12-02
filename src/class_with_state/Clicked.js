import React, { Component } from 'react';

class Clicked extends Component {
    constructor(props){
        super(props)
        
        this.state = { 
            message: false,
        };

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
    
        this.setState({ message: true });
    }


    render() {

        return (
          <p onClick={ this.handleClick }>{ this.state.message ? "Clicked" : "Not clicked" }
          </p>  
          );
    }
}
 
export default Clicked;