import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { storeFactory }  from './testHelpers';
import InputWord from './InputWord';
Enzyme.configure({ adapter: new EnzymeAdapter() });

const initialState = {success: false };

const setup = (initialState) => {

    /*
      *@U can inititiate your store with data diffrent to initial by
      *@create your own testing store so initial data will have state you want to test
    */
    const store = storeFactory( initialState );
    
    //dive method allows you to go inside InputWord render 
    const InputWordComponent = shallow(<InputWord store={store} />).dive();
    return InputWordComponent;
};

describe('render InputWord component', () => {
  
    test('compoent renders without errors',()=>{
        const component = setup().find('[data-test="InputWord-component"]');
        expect(component.length).toBe(1);
    });
    
    describe('word has been gueessed success:true', () => {
        const updateStore = setup( { success:true } );

        test('does not renders input box',() => {
            const inputBox = updateStore.find('[data-test=\'input-box\']');
            expect(inputBox.length).toBe(0);
        });
        test('does noe renders submit button',() => {
            const buttonBox = updateStore.find('[data-test=\'button-box\']');
            expect(buttonBox.length).toBe(0);
        });
    });
    describe('word has not been gueessed success:false ', () => {
        const updateStore = setup( { success:false } );

        test('does render input box',() => {
            const inputBox = updateStore.find('[data-test=\'input-box\']');
            expect(inputBox.length).toBe(1);
        });
        test('does render submit button',() => {
            const buttonBox = updateStore.find('[data-test=\'button-box\']');
            expect(buttonBox.length).toBe(1);
        });
    });
});
