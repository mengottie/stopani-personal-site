import React from 'react';
import { FaBars } from 'react-icons/fa';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Hamburger from './Hamburger';
import Title from './Title';
import BuyTheBook from './BuyTheBook';

function Navbar({ toggleSideMenuHandler }) {
    return (
        <Wrapper>
            <Hamburger onClick={toggleSideMenuHandler}>
                <FaBars />
            </Hamburger>
            <Title>Federico Stopani</Title>
            <BuyTheBook>Buy the book</BuyTheBook>
        </Wrapper>
    )
}

Navbar.propTypes = {
    toggleSideMenuHandler: PropTypes.func.isRequired
}

export default Navbar;
