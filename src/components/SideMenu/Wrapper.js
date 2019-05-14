import styled from 'styled-components';

import { darkestColor } from '../../styles/tokens';

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    height: 100%;
    background-color: ${darkestColor};
    z-index: 150;
`;

export default Wrapper;
