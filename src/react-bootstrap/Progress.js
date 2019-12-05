import React, { Component } from "react";
import  { ProgressBar, Button } from "react-bootstrap";

class Progress extends Component {
    constructor(props) {
        super(props);
   
        this.state = {
          percentage: 0,
        }

        this.handleClick = this.handleClick.bind(this);
}

    handleClick () {

        let { percentage } = this.state;

        this.setState({
            percentage: percentage += 10,
        });
    }
 
    render(){

        const now = this.state.percentage;
       
     return(
        <>
          <ProgressBar animated now = {now} 
                       label={`${now}%`}
                       variant= "info"
                       style = {{
                        margin: "10px",
                        }} 
            />

          <Button variant="outline-primary"
                  onClick={ this.handleClick }
                  disabled={now === 100}
                  style = {{
                    margin: "10px",
                  }}
          > 
          More!! 
          </Button>
        </>
     );  
    }

}

export default Progress;


