import React, { Component } from 'react';

// const Header = ({ children }) => (
//     <h1>{ children }</h1>
//   );

// export default Header;

class Header extends Component {

  render() { 

    let { children } = this.props;

    return ( 
      <h1>{ children }</h1>
    );
  }
}
 
export default Header;