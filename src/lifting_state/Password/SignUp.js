import React, {Component} from 'react';

import Password from './Password';

class SignUp extends Component {
    constructor(props){
        super(props);

        this.state = {
            password: "",
            confirm: "",
        }

        this.handlePassword = this.handlePassword.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        
    }

    handlePassword(e) {
        this.setState({
            password: e.currentTarget.value,
        });
    }

    handleConfirm(e) {
        this.setState({
            confirm: e.currentTarget.value
        });
    }

    render() { 

        let { minimumLength } = this.props;
        let { password, confirm } = this.state;

        let valid = (password === confirm) && (password.length >= minimumLength) && (confirm.length >= minimumLength);
        
        return (
            <>
                <Password label = "password"
                          value = { password }
                          handleChange={ this.handlePassword }
                          valid= { { borderColor : valid ?  "blue" : "red" } }
                        />
                <Password label = "Confirm Password"
                          value = { confirm }
                          handleChange={ this.handleConfirm }
                          valid= { { borderColor : valid ?  "blue" : "red" } }
                        />
            </> 
          );
    };
}
 
export default SignUp;