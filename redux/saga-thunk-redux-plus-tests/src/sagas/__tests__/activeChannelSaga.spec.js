import {
  activeChannelSagaWatcher,
  putActiveChannel,
} from "../activeChannelSaga";
import { runSaga } from "redux-saga";
import { fromJS } from "immutable";
import { SET_ACTIVE_CHANNEL } from "./../../actions";
import { currentUserSelector } from "./../../selectors";

import { takeLatest, select, call } from "redux-saga/effects";
import axios from "axios";
/*jest.mock("axios"); */

//jest.spyOn(window, "get").mockImplementation(() => "hi");
describe("activeChannelSagaWatcher", () => {
  it('activeChannelSagaWatcher watches for latest "SET_ACTIVE_CHANNEL" action', () => {
    const generator = activeChannelSagaWatcher();
    expect(generator.next().value).toEqual(
      takeLatest(SET_ACTIVE_CHANNEL, putActiveChannel)
    );
    //no more yield statements (I added console for info!!)
    generator.next();
    expect(generator.next().done).toBeTruthy();
  });
  it("should get current User from currentUserSelector", () => {
    const state = { currentUser: { id: "userID" } };
    const id = "test";
    //override default mock implemenatation
    //axios.get.mockImplementationOnce(() => "custom");
    //axios.get.mockReturnValueOnce(() => "custom");

    /**
     *
     * @usage: run saga will run entire generator function from
     * first to last yield
     **/
    runSaga(
      {
        //dispatch: (action) => dispatched.push(action), //this generator doesnt dispatch action
        getState: () => fromJS(state), //needs to be converted to immutable.js
      },
      putActiveChannel,
      { id }
    );
    //expect to call our mock axios.get
    expect(axios.get).toHaveBeenCalledTimes(1);
    axios.get().then((result) => {
      expect(result).toEqual("default");
    });
    const userID = state.currentUser.id;
    expect(axios.get).toHaveBeenCalledWith(
      `/user/activeChannel/${userID}/${id}`
    );
  });
  //dont use next example
  it("should get current User from currentUserSelector attempt 2!", () => {
    //start generator function
    const generator = putActiveChannel({ id: "test" });
    //run first yield just run doenst matter the outcome
    const currentUser = generator.next();
    //check if selector function is being called
    expect(currentUser.value).toEqual(select(currentUserSelector));

    //run second yield with forced value by passing current UserObject
    const userID = generator.next(fromJS(currentUser));

    //run third yield just run doenst matter the outcome
    const call = generator.next();
    /**
     *
     * @usage: unfortunatelly this way U dont test anything U just execute
     * yeild one after another without meaningful data
     **/
  });
});
