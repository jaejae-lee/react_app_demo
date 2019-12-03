import React from 'react';

const Password = ( { label, handleChange,  style } ) => (
    <>
        <label>{ label }</label>
        <input type = "number"
               label = { label }
               onChange={ handleChange }
               style = { style }
        />
     </>

)
 
export default Password;
 