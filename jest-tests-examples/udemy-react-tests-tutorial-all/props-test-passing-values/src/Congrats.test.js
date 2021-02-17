import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import CongratsComp from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const mockProps = {
    message:'greg'
};  

const getWrapper = ( defaultProps = mockProps ) => {

    const wrapper = shallow(<CongratsComp  {...defaultProps} />);
    const CongratsComponent = wrapper.find('[data-test="Congrats-message"]');
    return CongratsComponent;
};

test('renders Congrats Component', ()=>{
    
    expect(getWrapper().length).toBe(1);
});

test('it renders name from props for Congrats message header', ()=>{
    //get Header and check if prints the name provider in props;
    const headerMessage = 
          getWrapper({message:'Philip'})
              .find('h1')
              .text();
    expect(headerMessage).toContain('Philip');
});
