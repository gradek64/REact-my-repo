var express = require("express");
var router = express.Router();

import { channels } from "./db/Channel";
import { users } from "./db/User";
import { OFFLINE, ONLINE, AWAY } from "./../src/actions";
import { createMessage } from "./server";

/**
*
* GET /channel/create/:channelID/:name/:participants
*
* this route is resposible for creating a private chat triggered by 
* by chat button next to user
* execution path:
* ContactListItemContainer.js => dispatch(openContactChannel(id));
* openContactChannel.js => (Phunk) openContactChannel = (id)=>(dispatch, getState)=>{}
      if(new channel)
      openContactChannel.js =>dispatch(requestCreateChannel(channelID, id, currentUserID, channelName));
            ,dispatch(setActiveChannel(channelID));
      if(existing channel)
      openContactChannel.js => dispatch(setActiveChannel(existingChannel.get(`id`)));
*
*  activeChannelSaga.js => yield takeLatest(SET_ACTIVE_CHANNEL, putActiveChannel);
**/
router.get(
  "/channel/create/:channelID/:name/:participants",
  ({ params: { channelID, name, participants } }, res) => {
    const channel = {
      id: channelID,
      name,
      participants: JSON.parse(participants),
      messages: [],
    };
    channels.push(channel);
    res.status(300).json(channel);
  }
);

/**
 * GET /user/activeChannel/:userID/:channelID
 *
 * trigger by clicking channel list to activate channel , after click button turns to blue
 * @execution
 * ChannelListContainer.js => dispatch(setActiveChannel(channel));
  setActiveChannel.js => makeActionCreator(SET_ACTIVE_CHANNEL, `id`);
  SET_ACTIVE_CHANNEL calls 2 sagas initialy:

    * activechannelSaga.js =>  yield takeLatest(SET_ACTIVE_CHANNEL, putActiveChannel);
    * channelSaga.js =>  yield takeEvery(SET_ACTIVE_CHANNEL, fetchChannelInfo);
  if was active before (clicked again then only calls )
      * activechannelSaga.js =>  yield takeLatest(SET_ACTIVE_CHANNEL, putActiveChannel);

 */

router.get(
  "/user/activeChannel/:userID/:channelID",
  ({ params: { userID, channelID } }, res) => {
    users.find((user) => user.id === userID).activeChannel = channelID;
    res.status(200).send(true);
  }
);

router.get("/channel/:id", (req, res) => {
  res.json(channels.find((channel) => channel.id === req.params.id));
});

/**
* POST /input/submit/:userID/:channelID/:messageID/:input
*
* @execution
* submit message button for saga action
*  
  CurrentChannelTextInputContainer.js => dispatch(submitChannelInputText(channel,text));
  submitChannelInputText.js => (phunk) export const submitChannelInputText = (channel,text)=>(dispatch,getState)=>{}
  currentChannelInputSaga.js => yield takeEvery(SUBMIT_CHANNEL_INPUT_TEXT, submitChannelInputText);

**/

router.post(
  "/input/submit/:userID/:channelID/:messageID",
  ({ body: { text }, params: { userID, channelID, messageID } }, res) => {
    const user = users.find((user) => user.id === userID);

    if (!user) {
      return res.status(404).send();
    }
    //text taken from Post body
    const input = text;
    createMessage({ userID, channelID, messageID, input });
    res.status(300).send();
  }
);

/**
 *
 * GET /status/:id/:status
 *
 * route that sets user status to either ONLINE, OFFLINE, AWAY
 * @execution
 * currentUserContainer => dispatch(updateStatus(value));
 * updateStatus.js => makeActionCreator(UPDATE_STATUS, `status`);
 * currentUserStatusSaga.js => yield takeLatest(UPDATE_STATUS, putUserStatus);
 **/

router.get("/status/:id/:status", ({ params: { id, status } }, res) => {
  if (![ONLINE, OFFLINE, AWAY].includes(status)) {
    return res.status(403).send();
  }
  const user = users.find((user) => user.id === id);
  if (user) {
    user.status = status;
    res.status(200).send();
  } else {
    res.status(404).send();
  }
});

router.get("/user/:id", (req, res) => {
  res.json(
    users
      .map(({ name, id }) => ({ name, id }))
      .find((user) => user.id === req.params.id)
  );
});

module.exports = router;
