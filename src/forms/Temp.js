import React, { Component } from 'react';

class Temp extends Component {

    render() { 
        let { name, value, handleChange  } = this.props;

        return ( 
            <div className="form-group">
                {name} :
                <input
                value = { value }
                type = "number"
                onChange={ handleChange }
                className="form-control"
                />
            
            </div>
         );
    }
}

 
export default Temp;