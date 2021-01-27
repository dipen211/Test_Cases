import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Login from './login';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
describe('Login component tests', () => {
    const wrapper = shallow(<Login />);

    it('should have a btn component', () => {
        expect(wrapper.find('button')).toHaveLength(1);

        expect(wrapper.find('button').text()).toEqual('LOGIN');
    });

    it('should have input for email and password', () => {
        expect(wrapper.find('input#email')).toHaveLength(1);
        expect(wrapper.find('input#password')).toHaveLength(1);
    });

    it('should have an empty email and password state var', () => {
        expect(wrapper.state('email')).toEqual('');
        expect(wrapper.state('password')).toEqual('');
    });
});
