import React from 'react';
import PropTypes from 'prop-types';

import Element from './Element';

function MenuElement({ text }) {
    return(
        <Element>{text}</Element>
    )
}

MenuElement.propTypes = {
    text: PropTypes.string.isRequired
}

export default MenuElement;
