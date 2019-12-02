import React, { Component } from 'react';


class Adder extends Component {
    constructor(props){
        super(props);
        this.state = { 
            input: "",
            list: [],
         }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    handleChange(e) {
        this.setState({input: e.currentTarget.value,});
    }

    handleClick(e) {
        this.setState({ list: [...this.state.list, +this.state.input ] });
    }

    render() { 
        return ( 
            <div className="form-group">
                <input
                type = "number"
                onChange={ this.handleChange }
                value={ this.state.input }
                className="form-control"
                />

                <ul>
                    { this.state.list.map((listitem, i) => (
                        <li key = { i }> { listitem } </li> 
                    )) }
                </ul> 
                <p>
                    Total: { this.state.list.reduce((total, listItem) => total + listItem, 0) }
                </p>
                <button onClick = { this.handleClick } >Add</button>
            </div>
        );
    }
}
 
export default Adder;