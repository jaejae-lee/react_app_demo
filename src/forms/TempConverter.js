import React, { Component } from "react";

import Temp from './Temp';


class TempConverter extends Component {
    constructor(props){
        super(props);
        this.state = {
            celcius: '0',
        }

        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.handleCelcius = this.handleCelcius.bind(this);
    }

    handleFahrenheitChange(e) {
        this.setState({
            celcius: (e.currentTarget.value - 32 ) * 5/9,
        });
    }

    handleCelcius(e) {
        this.setState({
            celcius: e.currentTarget.value
        });
    }

    render() { 
        return ( 
            <div className="form-group">

                    <Temp name = "Celcius"
                        
                        value = {this.state.celcius}
                        handleChange={ this.handleCelcius }/>
        
                    <Temp name = "Fahrenheit" 
              
                        value = {(this.state.celcius * 9/5 ) + 32}
                        handleChange={ this.handleFahrenheitChange }/>
    
            </div>
        );
    }
}

export default TempConverter;