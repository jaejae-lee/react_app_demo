import React, { Component } from 'react';

class Square extends Component {
  constructor(props) {
      super(props);

      this.state = {
          red: true,
      };

      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      this.setState({
          red: !this.state.red,
      });
  }

  render() {
      let colour = this.state.red ? "red" : this.props.colour;

      return (
          <div
              onClick={ this.handleClick }
              style={{
                  height: 200,
                  width: 200,
                  background: colour,
              }}
          />
      );
  }
}

Square.defaultProps = {
  color: "black"
};

export default Square;