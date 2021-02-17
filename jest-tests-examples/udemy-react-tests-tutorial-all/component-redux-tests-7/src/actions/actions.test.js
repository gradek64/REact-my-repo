import mockAxios from 'axios';
import { storeFactory, axiosMock } from '../testHelpers';
import { actionTypes, getSecretWord }  from './';
import secretWordService from '../services/secretWordService';


describe( 'action set', ()=>{
    let realServiceOutcome;
    const mockStore = storeFactory();
    test('secretWordService call API got get Secret Word', async ()=>{
        const resp = {data: [{secretWord:'Greg'}]};
        //now mockAxios.get will be used with mock data;
        mockAxios.get = jest.fn().mockImplementationOnce(()=>Promise.resolve(resp));
        //call the real service that now uses axios so now uses mockAxios;
        realServiceOutcome = await secretWordService().getSecretWord;

        expect(realServiceOutcome.data).toEqual([ { secretWord:'Greg' } ]);
    });

    test('API callback is used to call the store by dispatching action and updating the store', ()=>{
        mockStore.dispatch({
            type: actionTypes.SET_SECRET_WORD,
            payload:realServiceOutcome,
        });

        const updatedState = mockStore.getState();
        expect(updatedState.secretWord).toEqual(realServiceOutcome);
    });
});