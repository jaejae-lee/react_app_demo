import React, { Component } from 'react';


class Length extends Component {
    constructor(props){
        super(props);
        this.state = { 
            input: ""
         }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }

    render() { 
        return ( 
            <div className="form-group">
                <input
                onChange={ this.handleChange }
                value={ this.state.input }
                className="form-control"
                />
                <p className="help-block">
                Length: { this.state.input.length } characters
                </p>
            </div>
        );
    }
}
 
export default Length;