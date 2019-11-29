import React from 'react';

import Header from './basic class comp/Header';
import Para from './basic class comp/Paragraph';
import Square from './basic class comp/Square';
import People from './basic class comp/People';

import Clicked from './class comp with state/Clicked';

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
