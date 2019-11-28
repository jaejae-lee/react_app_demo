import React from 'react';


const Para = ({ children }) => (
    <p>{ children }</p>
);

Para.defaultProps = {
    children: "Hello, world"
};
  
export default Para;