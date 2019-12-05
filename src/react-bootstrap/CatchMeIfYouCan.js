import React, { Component } from "react";
import  { Button } from "react-bootstrap";

class CatchMeIfYouCan extends Component {
    constructor(props) {
        super(props);
   
        this.state = {
          x: 0,
        }

        this.handleClick = this.handleClick.bind(this);
}

    handleClick () {

        let { x } = this.state;
        let { jump } = this.props;
    
        this.setState({
            x : x += jump
        });
    }
 
    render(){
       
     return(
        <>

          <Button variant="primary"
                  onClick={ this.handleClick }
                  style = {{
                      position: "relative",
                      top: this.state.x,
                      margin:  this.state.x,
                      display: "block",
                  }}
          > 
          Catch Me If You Can!!
          </Button>
        </>
     );  
    }

}

export default CatchMeIfYouCan;