import React from 'react';

import Header from './Header';
import Para from './Paragraph';
import Square from './Square';
import People from './People';

const Stuff = ( { square }) => (
    <>
        <Header>Hello, World</Header>
        <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Ubi ut eam caperet aut quando? Videmus igitur ut conquiescere ne infantes quidem possint. Magna laus. Bonum patria: miserum exilium. Sed tu istuc dixti bene Latine, parum plane. Duo Reges: constructio interrete. Ergo hoc quidem apparet, nogs ad agendum esse natos.</Para>
        { square ? (<Square color= "lime" />) : null }
        <People names = { ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"] } />
    </>
  );

Stuff.defaultProps = {
    square: true,
};

export default Stuff;
