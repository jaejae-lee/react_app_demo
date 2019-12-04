import React from 'react';

const Password = ( { label, handleChange, valid } ) => (
    <>
        <label>{ label }</label>
        <input type = "number"
               label = { label }
               onChange={ handleChange }
               style = { valid }
        />
     </>

)
 
export default Password;
 