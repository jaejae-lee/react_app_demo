import React from 'react';

let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

const People = () => (
    <ul>
       {names.map((person, index) => (
           <li key={ index }> { person } </li> 
       ))}
    </ul> );

export default People;




