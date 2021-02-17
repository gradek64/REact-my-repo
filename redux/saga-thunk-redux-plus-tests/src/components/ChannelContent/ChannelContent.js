import React from "react";
import { OFFLINE, FETCHED, FETCHING } from "./../../actions";
import { MessageContainer } from "./../Message/MessageContainer";
class ChannelContent extends React.Component {
  constructor(props) {
    super(props);
    this.scrollRef = null;
  }

  scrolltoBottom() {
    console.log(this.scrollRef.getBoundingClientRect().top);
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  }
  componentDidMount() {
    //this.scrolltoBottom();
  }

  componentDidUpdate({ channelName: prevChannel }) {
    const { channelName: selectedChannel } = this.props;
    if (prevChannel !== selectedChannel) {
      //this.scrolltoBottom();
    }
  }
  render() {
    const { messages, channelName, status, fetchStatus } = this.props;
    return (
      <div
        ref={(ref) => {
          this.scrollRef = ref;
        }}
      >
        <h4>Channel: {channelName}</h4>
        {status === OFFLINE ? (
          <h5>Contacts in the channel will see you as offline.</h5>
        ) : null}
        <div>
          {fetchStatus !== FETCHED ? <span>Please wait...</span> : null}
          {messages.size === 0 && fetchStatus === FETCHED ? (
            <span>Be the first to say something.</span>
          ) : null}
          {messages.map((message) => (
            <div key={`message${Math.random() * 100}`}>
              <MessageContainer message={message} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export { ChannelContent };
