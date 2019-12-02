import React, { Component } from 'react';


class List extends Component {
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
        this.setState({ list: [...this.state.list, this.state.input ] });
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
                    { this.state.list.map((Listitem, i) => <li key = { i }> { this.state.list[i] } </li> ) }
                </ul>

                <button onClick = { this.handleClick } >Add</button>
            </div>
        );
    }
}
 
export default List;