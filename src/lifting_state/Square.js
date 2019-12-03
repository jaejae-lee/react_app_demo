import React from 'react';

const Square = ( { color, selected, handleClick } ) => (

    <div style = { {
        height: 200,
        width: 200,
        display:"inline-block",
        margin: 50,
        background: selected ? "hotpink" : color } }
        onClick={ handleClick }
        />
)
 
export default Square;