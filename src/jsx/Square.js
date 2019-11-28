import React from 'react';


const Square = ({ color }) => (
    <div style= {
      {width: '200px', height: '200px', background: color} 
      } >
      
    </div>
);

Square.defaultProps = {
  color: "black"
};

export default Square;