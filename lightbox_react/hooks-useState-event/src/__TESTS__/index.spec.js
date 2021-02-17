import React from 'react';
import { render } from 'react-dom';
import { shallow } from 'enzyme';
import Index from '../index';

//mock dom render
jest.mock('react-dom', () => ({
  render: jest.fn(() => {}),
}));
//custom
import customEvent from '../customEvents/dispatchEvent';

//spy on customEvent.emit
jest.spyOn(customEvent, 'emit').mockImplementation(() => {});

describe('Index', () => {
  it('should render correctly', () => {
    const component = shallow(<Index />);
    expect(component).toMatchSnapshot();
  });

  it('when button 1 is clicked it shoudl call customEvent.emit method', () => {
    const wrapper = shallow(<Index />);
    const button1 = wrapper.find('button').first();
    button1.simulate('click');
    expect(customEvent.emit).toBeCalledWith('OPEN_MODAL_1');
  });

  it('when button 2 is clicked it shoudl call customEvent.emit method', () => {
    const wrapper = shallow(<Index />);
    const button2 = wrapper.find('button').last();
    button2.simulate('click');
    expect(customEvent.emit).toBeCalledWith('OPEN_MODAL_2');
  });
});
