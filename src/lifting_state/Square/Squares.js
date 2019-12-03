import React, {Component} from 'react';

import Square from './Square';

class Squares extends Component {
    constructor(props){
        super(props);

        this.state = {
            selected: 0,
        }
    }

    render() { 
        return (
            <>
                <Square 
                        selected = { this.state.selected === 1 }
                        handleClick = { () => this.setState( {selected: 1} ) }
                        color = "lime"
                         />

                <Square name = "square2" 
                        selected = { this.state.selected === 2 }
                        handleClick = { () => this.setState( {selected: 2} ) }
                        color = "lime"
                         />
            </>
          );
    }
}
 
export default Squares;