import React from 'react';

import Wrapper from './Wrapper';
import MenuElement from './MenuElement';

function SideMenu() {
    return (
        <Wrapper>
            <ul>
                <MenuElement text={'Element 1'} />
                <MenuElement text={'Element 2'} />
                <MenuElement text={'Element 3'} />
            </ul>
        </Wrapper>
    )
}

export default SideMenu;
