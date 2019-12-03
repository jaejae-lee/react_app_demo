import React, { Component } from 'react';


class Adder extends Component {
    constructor(props){
        super(props);
        this.state = { 
            input: "", // input value : always keep as a string 
            list: [],
         }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    handleChange(e) {
        this.setState({input: e.currentTarget.value,}); // this DOM returns a string 
    }

    handleClick(e) {
        let {list, input } = this.state;

        this.setState({ 
            list: [...list, +input ], // turn into number when you put it into an array
            input: "", 
         });
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