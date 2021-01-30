import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Register, { User } from '../../comopnents/Register/register';
import { mountToJson } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
describe('<Register>', function () {
    let wrapper: any;
    beforeEach(() => {
        wrapper = shallow(<Register />);
    });
    it('should match the snapshot', () => {
        expect(mountToJson(wrapper)).toMatchSnapshot();
    });
    it('handle Change', () => {
        wrapper.instance().handleChange({ target: { value: 'test', name: 'email' } });
        wrapper.update();
        expect(wrapper.state('email')).toEqual('test');
    });
    it('Should capture firstname correctly onChange', () => {
        wrapper.find('input').at(0);
        wrapper.simulate('change');
        wrapper.setState({ firstname: "Dipen" })
        expect(wrapper.state('firstname')).toEqual('Dipen');
    })
    it('Should capture lastname correctly onChange', () => {
        wrapper.find('input').at(1);
        wrapper.simulate('change');
        wrapper.setState({ lastname: "Dipen" })
        expect(wrapper.state('lastname')).toEqual('Dipen');
    })
    it('Should capture email correctly onChange and change the state accordingly', () => {
        wrapper.find('input').at(2);
        wrapper.simulate('change');
        wrapper.setState({ email: "Dipen@gmail,com" })
        expect(wrapper.state('email')).toEqual('Dipen@gmail,com');
    })

    it('Should call alert() when submit button is clicked', () => {
        const state = {
            firstname: 'Dipen', lastname: 'Dipen',
            email: 'Dipen@gmail.com',
            subscribed: false
        };
        const expectedArg = "Firstname: Dipen, Lastname: Dipen, Email: Dipen@gmail.com, Subscribed: No";
        window.alert = jest.fn();
        wrapper.setState(state)

        wrapper.find('form').simulate('submit')
        expect(window.alert).toHaveBeenCalledWith(expectedArg);
    })
})