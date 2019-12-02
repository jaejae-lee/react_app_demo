import React, { Component } from 'react';


class List extends Component {
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
                <ul>
                    <li>{ this.state.input.value }</li>
                </ul>
                <button onClick = { this.handleChange } >Add</button>
            </div>
        );
    }
}
 
export default List;