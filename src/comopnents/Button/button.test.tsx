import react from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button } from './button';
import { mountToJson } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
    let wrapper:any;
    beforeEach(() => {
        wrapper = shallow(<Button />);
    });
    it('should match the snapshot', () => {
        expect(mountToJson(wrapper)).toMatchSnapshot();
    });
    it('should show text', () => {
        const text = wrapper.find('div div');
        expect(text.text()).toBe('Text');
    });
    it('should hide text when button is clicked', () => {
        const button = wrapper.find('button.buttonText');
        button.simulate('click');
        const text = wrapper.find('div div');
        expect(text.length).toBe(0);
    });
    it('should increment number when button is clicked', () => {
        const total = wrapper.find('div h2').text();
        expect(total).toBe("0");
        const button = wrapper.find('button.buttonAdd');
        button.simulate('click');
        const total1 = wrapper.find('div h2').text();
        expect(total1).toBe("1");
    });
    it('should checked when checkbox is clicked', () => {
        expect(wrapper.text()).toEqual('ToggleTextAdd0Off');
        wrapper.find('input').simulate('change');
        expect(wrapper.text()).toEqual('ToggleTextAdd0On');
    });
})