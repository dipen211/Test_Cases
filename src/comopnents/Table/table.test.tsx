import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Table from '../../comopnents/Table/table';

Enzyme.configure({ adapter: new Adapter() });
describe('Table component tests', () => {
    let wrapper: Enzyme.ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
    beforeEach(() => {
        wrapper = shallow(<Table />);
    });

    it('should have the <th> Items', () => {
        expect(wrapper.contains(<th>Items</th>)).toBe(true);
    });
    it('should have a <button> element', () => {
        expect(wrapper.containsMatchingElement(<button>Add item</button>)).toBe(true);
    });
    it('<button> should be disabled', () => {
        const button = wrapper.find('button').first(); expect(button.props().disabled).toBe(true);
    });
    describe('input component tests', () => {
        let item = 'Laundry';
        beforeEach(() => {
            const input = wrapper.find('input').first();
            input.simulate('change', {
                target: { value: item }
            })
        });
        it('should update the state property <item>', () => {
            expect(wrapper.state().item).toEqual(item);
        });
        it('should enable <button>', () => {
            const button = wrapper.find('button').first();
            expect(
                button.props().disabled
            ).toBe(false);
        });
        describe('and then clears the input', () => {
            beforeEach(() => {
                const input = wrapper.find('input').first();
                input.simulate('change', {
                    target: { value: '' }
                })
            });
            it('should disable <button>', () => {
                const button = wrapper.find('button').first();
                expect(
                    button.props().disabled
                ).toBe(true);
            });
        });
        describe('submit the form component test', () => {
            beforeEach(() => {
                const form = wrapper.find('form').first();
                form.simulate('submit', {
                    preventDefault: () => { },
                });
            });
            it('should add the item to state', () => {
                expect(
                    wrapper.state().items
                ).toContain(item);
            });
            it('should render the item in the table', () => {
                expect(
                    wrapper.containsMatchingElement(
                        <td>{item}</td>
                    )
                ).toBe(true);
            });
            it('should clear the input field', () => {
                const input = wrapper.find('input').first();
                expect(
                    input.props().value
                ).toEqual('');
            });
            it('should disable `button`', () => {
                const button = wrapper.find('button').first();
                expect(
                    button.props().disabled
                ).toBe(true);
            });
        });
    });
});