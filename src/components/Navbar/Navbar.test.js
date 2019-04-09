import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', () => {
    let component;

    beforeEach(() => {
        component = shallow(<Navbar />);
    })

    describe('Title', () => {
        it('has correct text', () => {
            console.log('Foo', component.find('Title'))
            expect(component.find('Title').text()).toBe('Federico Stopani');
        });
    });

    // describe('Hamburger', () => {
    // describe('Opening animations', () => {
    //     it('opens the side menu when clicked', () => {
    //         component.find('Hamburger').simulate('click');
    //         expect(false).toBe(true);
    //     });

    //     it('moves the doc body on the right when clicked', () => {
    //         expect(false).toBe(true);
    //     })
    // })

    // describe('Closing animations', () => {
    //     it('closes the side menu when clicked again', () => {
    //         expect(false).toBe(true);
    //     });

    //     it('moves the doc body on the left when clicked again', () => {
    //         expect(false).toBe(true);
    //     });
    // });
    // });

    // describe('Link to book', () => {
    //     it('contains an href attribute pointing at #buy-the-book', () => {
    //         expect(false).toBe(true);
    //     });
    // });
});
