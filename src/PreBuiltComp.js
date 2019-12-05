import React from 'react';

import Progress from './react-bootstrap/Progress.js';
import CatchMeIfYouCan from './react-bootstrap/CatchMeIfYouCan.js';
import PasswordStrength from './react-bootstrap/PasswordStrength.js';

const PreBuiltComp = () => (
    <div className = "container">
        <Progress />
        <CatchMeIfYouCan jump = { 100 }/>
        <PasswordStrength />
    </div>
   
)

export default PreBuiltComp;