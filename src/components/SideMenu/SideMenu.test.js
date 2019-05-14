import React from 'react';
import { create } from 'react-test-renderer';

import SideMenu from './SideMenu';

jest.mock('./SideMenu', () => 'SideMenu');

describe('SideMenu', () => {
    let component;

    beforeEach(() => {
        component = create(<SideMenu />);
    })
    it('renders correctly', () => {
        expect(component.toJSON()).toMatchSnapshot();
    })
})
