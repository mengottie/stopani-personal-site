import React from 'react';

import Wrapper from './Wrapper';

function Backdrop({ toggleSideMenuHandler }) {
    return(
        <Wrapper onClick={toggleSideMenuHandler} />
    )
}

export default Backdrop;
