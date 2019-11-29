import React from 'react';

import Header from './Header';
import Para from './Paragraph';
import Square from './Square';
import People from './People';

const Stuff = ( { square } ) => (
    <>
        <Header>Hello, World</Header>
        <Para>I'm a paragraph</Para>
        { square ? <Square color= "lime" /> : null }
        <People names = { ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"] } />
    </>
);

Stuff.defaultProps = {
    square: true,
};

export default Stuff;
