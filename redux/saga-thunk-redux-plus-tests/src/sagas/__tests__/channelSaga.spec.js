import { channelSagaWatcher, fetchChannelInfo } from "../channelSaga";
import { fromJS } from "immutable";
import { SET_ACTIVE_CHANNEL } from "../../actions";
import { expectSaga } from "redux-saga-test-plan";
import { takeEvery } from "redux-saga/effects";
jest.mock("../../__mocks__/fetch");
import fetch from "../../__mocks__/fetch";
//=========================================================
// using: redux-saga-test-plan
//@https://redux-saga-test-plan.jeremyfairbank.com/integration-testing/
//=========================================================

describe("channelSagaWatcher", () => {
  it('channelSagaWatcher watches for latest "SET_ACTIVE_CHANNEL" action', () => {
    const generator = channelSagaWatcher();
    expect(generator.next().value).toEqual(
      takeEvery(SET_ACTIVE_CHANNEL, fetchChannelInfo)
    );
    //no more yield statements (I added console for info!!)
    generator.next();
    expect(generator.next().done).toBeTruthy();
  });
});
describe("channelSagaWatcher", () => {
  //------ state ----------
  let state = {
    channels: [
      { id: "channel1", fetchStatus: "FETCHING" },
      { id: "channel2", fetchStatus: "FETCHING" },
    ],
  };
  //------ fetchChannelInfo parameter ----------
  let parameterID = { id: "channel1" };

  it("should not call fetch if channel.get(`fetchStatus`) !== NOT_FETCHED", () => {
    return expectSaga(fetchChannelInfo, parameterID)
      .withState(fromJS(state))
      .not.call(fetch)
      .run();
  });
  it("should call fetch and dispatches setChannelInfo when channel.get(`fetchStatus`) === NOT_FETCHED", () => {
    //mutate state object no  need to assing new variable
    Object.assign(state.channels[0], { fetchStatus: "NOT_FETCHED" });

    return expectSaga(fetchChannelInfo, parameterID)
      .withState(fromJS(state))
      .put({
        type: "SET_CHANNEL_INFO",
        channel: fromJS({ fetchStatus: "FETCHED", response: "success" }),
      })
      .run();
  });
});
