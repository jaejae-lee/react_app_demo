import React from 'react';

const People = ( { names } ) => (
    !names ? <p> Nothing to see here </p> :
    <ul>
        { names.map((person, index) => (
            <li key={ index }> { person } </li> 
        )) } 
    </ul>
);

// People.defaultProps = {
//     names: "Nothing to see here"
// };

export default People;




