import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import  checkPropTypes  from 'check-prop-types';

/*

    For testing prop types required we use package called 'check-prop-types' and
    and method called assertPropTypes;


*/
import CongratsComp from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const mockProps = {
    success: true
};  


test('check the prop types required is valid', ()=>{
    let propTypesType = checkPropTypes(CongratsComp.propTypes, {...mockProps}, 'prop', CongratsComp.success);
    expect(propTypesType).toBeUndefined();
});
