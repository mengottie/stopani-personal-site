import React from 'react';
import { create } from 'react-test-renderer';

import Backdrop from './Backdrop';

jest.mock('./Backdrop', () => 'Backdrop');

describe('Backdrop', () => {
    let component = create(<Backdrop />);

    it('renders correctly', () => {
        expect(component.toJSON()).toMatchSnapshot();
    })
})
