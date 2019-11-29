import React, { Component } from 'react';

class People extends Component {

    handleClick() {
        console.log("Hello world");
      }

    render() { 
        let { names } = this.props;
        return (
            !names ? <p> Nothing to see here </p> :
            <ul onClick={ this.handleClick }> 

            { names.map((person, index) => (
                <li key={ index }> { person } </li> )) } 

            </ul>
        );
    }
}
 
export default People;







