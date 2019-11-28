import React from 'react';


const Square = ({ color, square }) => (
    <div style= {
      {width: '200px', height: '200px', background: color, display: square } 
      } >
      
    </div>
);

Square.defaultProps = {
  color: "black"
};

export default Square;