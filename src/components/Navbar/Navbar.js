import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { lighterColor, white } from '../../styles/tokens';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: ${lighterColor}
`;

const Hamburger = styled.div`
    font-size: 1.4em;
    display: flex;
    margin-right: 1rem;
    color: ${white}
`;
Hamburger.displayName = 'Hamburger';

const Title = styled.div`
    flex-grow: 1;
    font-size: 1.2em;
    color: ${white}
`;
Title.displayName = 'Title';

const BuyTheBook = styled.div`
    font-size: 1.2em;
    color: ${white}
`;

function Navbar() {
    return (
        <Wrapper>
            <Hamburger onClick={() => console.log('foo')}>
                <FaBars />
            </Hamburger>
            <Title>Federico Stopani</Title>
            <BuyTheBook>Buy the book</BuyTheBook>
        </Wrapper>
    )
}

export default Navbar;
