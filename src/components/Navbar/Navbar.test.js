import React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';

import Navbar from './Navbar';

const sideMenuToggle = jest.fn();

describe('Navbar', () => {
    let createdComponent;
    let shallowComponent;

    beforeEach(() => {
        createdComponent = create(<Navbar toggleSideMenuHandler={sideMenuToggle} />);
        shallowComponent = shallow(<Navbar toggleSideMenuHandler={sideMenuToggle} />);
    });

    it('renders correctly', () => {
        expect(createdComponent.toJSON()).toMatchSnapshot();
    });

    it('has correct text', () => {
        expect(shallowComponent.find('Title').text()).toBe('Federico Stopani');
    });
});
