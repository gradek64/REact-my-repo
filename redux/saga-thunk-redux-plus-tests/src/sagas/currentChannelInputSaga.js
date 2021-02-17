import { SUBMIT_CHANNEL_INPUT_TEXT } from "./../actions";
import { takeEvery, call } from "redux-saga/effects";

function* submitChannelInputText({ channel, text, owner, id }) {
  const channelID = channel;
  yield call(() =>
    fetch(`/input/submit/${owner}/${channelID}/${id}`, {
      method: "POST",
      body: JSON.stringify({ text }),
    })
  );
}

export function* currentChannelInputSagaWatcher() {
  yield takeEvery(SUBMIT_CHANNEL_INPUT_TEXT, submitChannelInputText);
}
