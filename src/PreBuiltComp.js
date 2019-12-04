import React from 'react';

import Progress from './react-bootstrap/Progress.js';
import CatchMeIfYouCan from './react-bootstrap/CatchMeIfYouCan.js';

const PreBuiltComp = () => (
    <>
        <Progress />
        <CatchMeIfYouCan jump = { 100 }/>
    </>
   
)

export default PreBuiltComp;