import React from 'react';

import Squares from './lifting_state/Square/Squares';
import SignUp from './lifting_state/Password/SignUp';
// import Form from './lifting_state/Form/Form';

const Lifting = ( ) => (
    <>
        <Squares />
        <SignUp minimumLength={ 12 }/>
        {/* <Form fields={ fields } /> */}
    </>
);

export default Lifting;