import React from 'react';

import Header from './Header';
import Para from './Paragraph';
import Square from './Square';
import People from './People';

import Clicked from '../class comp with state/Clicked';

const Stuff = ( { square } ) => (
    <>
        <Header>Hello, World</Header>
        <Para>I'm a paragraph</Para>
        { square ? <Square color= "lime" /> : null }
        <People names = { ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"] } />
        <Clicked />
    </>
);

Stuff.defaultProps = {
    square: true,
};

export default Stuff;
