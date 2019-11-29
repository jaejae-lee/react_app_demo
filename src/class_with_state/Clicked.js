import React, { Component } from 'react';

class Clicked extends Component {
    constructor(props){
        super(props)
        
        this.state = { 
            message: "Not clicked",
        };

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
    
        this.setState({ message: "Clicked" });
    }


    render() {

        return (
          <p onClick={ this.handleClick }>{ this.state.message }
          </p>  
          );
    }
}
 
export default Clicked;