import React, {Component} from 'react';

import Password from './Password';

class SignUp extends Component {
    constructor(props){
        super(props);

        this.state = {
            password: "0",
            confirm: "0",
        }

        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(e) {
        this.setState({
            password: e.currentTarget.value,
            confirm: e.currentTarget.value
        });
    }

    render() { 

        let { minimumLength } = this.props;
        let { password, confirm } = this.state;
        
        return (
            <>
                <Password label = "password"
                          value = { password }
                          handleChange={ this.handleChange }
                
                          style = { {
                              borderColor : password === confirm && password.length > minimumLength ? "blue" : "red"
                          } }

                          />
                <Password label = "Confirm Password"
                          value = { confirm }
                          handleChange={ this.handleChange }

                          style = { {
                            borderColor : password === confirm && password.length > minimumLength ? "blue" : "red"
                        } }
           
                          />
            </> 
          );
    };
}
 
export default SignUp;