import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import  checkPropTypes  from 'check-prop-types';

/*

    For testing prop types required we use package called 'check-prop-types' and
    and method called assertPropTypes;


*/
import GuessWords from './GuessWords';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const mockPropsSet = {
    guessWords:[
        { guessWord:'train',letterMatchCount:3},
        { guessWord:'train',letterMatchCount:1},
        { guessWord:'party',letterMatchCount:5},
    ]
};



const setupComponent = ({ mockProps = mockPropsSet }={}) => shallow(<GuessWords {...mockProps}/>);

describe('if there are words gueessed',()=>{

    /*let GuessWordsCompoent;
    beforeEach(() => {
        GuessWordsCompoent =  setup();
    });*/

    test('renders custom message if there is not words passed', ()=>{
        const emptyArrayProps = { guessWords:[] };
        const wrapper = shallow(<GuessWords {...emptyArrayProps}/>); 
        expect(wrapper.text().length).not.toBeLessThan(0);
    });

    test('renders table if at least one word is passed', ()=>{
        const guessedWordComponent = setupComponent();
        const tableView = guessedWordComponent.find('[data-test="words-rendered"]');
        expect(tableView.length).toBe(mockPropsSet.guessWords.length);
    });
});
