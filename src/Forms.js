import React from 'react';

import Length from './forms/Length';
import List from './forms/List';
import Adder from './forms/Adder';
import TempConverter from './forms/TempConverter';
import Transform from './forms/Transform';


const Forms = ( ) => (
    <>
        <Length />
        <List />
        <Adder />
        <TempConverter />
        <Transform transform={ x=> x * x }/>
    </>
);


export default Forms;