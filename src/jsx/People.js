import React from 'react';

const People = ( { names } ) => (
    //regular js mode - don't need {}
    !names ? <p> Nothing to see here </p> :
    // when you open < > you are in jsx mode 
    <ul>
        {/* need { } to go into js world from jsx world */}
        { names.map((person, index) => (
            <li key={ index }> { person } </li> 
        )) } 
    </ul>
);

//default props doesnt work 
// there's no sensible default prop here 
//names -> array, default -> string ( can do empty array but then it will show the empty array, not a message)


export default People;




