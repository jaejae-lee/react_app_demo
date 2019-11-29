import React, { Component } from 'react';

class Square extends Component {
  constructor(props){
    super(props)
    
    this.state = { 
        color: "red",
    };

    this.handleClick = this.handleClick.bind(this);

  };

    handleClick() {
      let currentColor = this.state.color;
      let { color } = this.props;

      this.setState({ color : currentColor === "red" ? color : "red" });

       // if (currentColor === "red") {
      //   this.setState({ color : color });
      // } else {
      //   this.setState({ color : "red" });
      // }
      
    };

  render() { 

    return ( 
      <div onClick={ this.handleClick }
      style= { {
          width: '200px', height: '200px',
          background: this.state.color,
      } } 
      />
    );

  }
}

Square.defaultProps = {
  color: "black"
};

export default Square;