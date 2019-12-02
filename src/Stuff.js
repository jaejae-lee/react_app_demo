import React from 'react';

import Header from './basic_class/Header';
import Para from './basic_class/Paragraph';
import Square from './class_with_state/Square';
import People from './basic_class/People';

import Clicked from './class_with_state/Clicked';


const Stuff = ( { square } ) => (
    <>
        <Header>Hello, World</Header>
        <Para>I'm a paragraph</Para>
        { square ? <Square color= 'hotpink' /> : null }
        <People names = { ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"] } />
        <Clicked />

    </>
);

Stuff.defaultProps = {
    square: true,
};

export default Stuff;
