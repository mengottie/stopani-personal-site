import styled from 'styled-components';

import { modal } from '../../styles/tokens';

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: ${modal};
`

export default Backdrop;
