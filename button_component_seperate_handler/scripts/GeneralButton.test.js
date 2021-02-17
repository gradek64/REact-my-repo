import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import GeneralButton from './GeneralButton';


describe('GeneralButton', () => {
    it('should render correctly in "debug" mode', () => {
        const component = renderer
            .create(<GeneralButton  />)
            .toJSON();

        console.log(component);
  
        expect(component).toMatchSnapshot();
    });
    it('should handle the click event', () => {
        const myMock = jest.fn(x => 42 + x);
        const wrapper = shallow(<GeneralButton />);
        //pass method to props
        wrapper.setProps({ callParent: ()=>{myMock(5);} });
        wrapper.find('button').simulate('click');
        expect(myMock.mock.results[0].value).toBe(47);
    });
});