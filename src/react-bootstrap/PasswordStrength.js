import React, { Component }from 'react';
import Form from 'react-bootstrap/Form'


class PasswordStrength extends Component {

    constructor(props) {
        super(props);
   
        this.state = {
          password: "",
        }

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange (e) {
        this.setState ({
            password: e.currentTarget.value
        });
    }

    render() { 
        let { password } = this.state;

        let fieldColour = password.length === 0 ? null : password.length < 9 ? 'red' : password.length < 16 ? 'orange' : 'green';
    
        return ( 
            <Form>
                <Form.Group controlId="formPlaintextPassword">
                    
                    <Form.Label column sm="2">
                    Password
                    </Form.Label>
    
                    <Form.Control 
                    type="password"               
                    placeholder="Password"
                    value={ password }
                    onChange={ this.handleChange }
                    style = { { background: fieldColour } } 
                    />

                </Form.Group>
            </Form>
         ); 
    }
}
 
export default PasswordStrength;