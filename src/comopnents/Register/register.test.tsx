import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Register, { User } from '../../comopnents/Register/register';

Enzyme.configure({ adapter: new Adapter() });
describe('<Register>', function () {

    it('Should capture firstname correctly onChange', () => {
        const wrapper = shallow(<Register />);
        const input = wrapper.find('input').at(0);
        wrapper.simulate('change');
        wrapper.instance().firstname = 'Dipen';
        expect(wrapper.state('firstname')).toEqual('Dipen');
    })

    // it('Should capture lastname correctly onChange', () => {

    //     const wrapper = mount(<Register />);
    //     const input = wrapper.find('input').at(1);
    //     input.instance().value = 'Dipen';
    //     input.simulate('change');
    //     expect(wrapper.state().lastname).toEqual('Dipen');
    // })

    // it('Should capture email correctly onChange and change the props accordingly', () => {

    //     const wrapper = mount(<Register />);
    //     const input = wrapper.find('input').at(2);
    //     input.instance().value = 'Dipen@gmail.com';
    //     input.simulate('change');
    //     expect(wrapper.find('input').at(2).props().value).toEqual('Dipen@gmail.com');
    // })

    // it('Should capture email correctly onChange and change the state accordingly', () => {

    //     const wrapper = mount(<Register />);
    //     const input = wrapper.find('input').at(2);
    //     input.instance().value = 'mail@hotmail.com';
    //     input.simulate('change');
    //     expect(wrapper.state().email).toEqual('mail@hotmail.com');
    // })
    // it('Should capture checkbox ticked correctly onChange', () => {
    //     const wrapper = mount(<Register />);
    //     const input = wrapper.find('input').at(3);
    //     input.instance().checked = true;
    //     input.simulate('change');
    //     expect(wrapper.state().subscribed).toEqual(true);
    // })
    // it('Should call alert() when submit button is clicked', () => {
    //     const state = {
    //         firstname: 'hello', lastname: 'world',
    //         email: 'hello@world.com', languages: ['English', 'French'],
    //         subscribed: true
    //     };
    //     const expectedArg = "Firstname: hello, Lastname: world, Email: hello@world.com, Language: English,French, Subscribed: Yes";
    //     const wrapper = mount(<Register />);
    //     window.alert = jest.fn();
    //     wrapper.setState(state)

    //     wrapper.find('form').simulate('submit')
    //     expect(window.alert).toHaveBeenCalledWith(expectedArg);
    // })
})