import styled from 'styled-components';

import { white } from '../../styles/tokens';

const Hamburger = styled.div`
    font-size: 1.4em;
    display: flex;
    margin-right: 1rem;
    color: ${white}
`;
Hamburger.displayName = 'Hamburger';

export default Hamburger;
