import { fromJS } from "immutable";
import { ChannelContent } from "../ChannelContent";

//manual mock for react-redux in a scope of this file
/* jest.mock("react-redux", () => ({
  connect: jest.fn(
    (mapStateToProps, mapDispatchToProps) => (reactComponent) => {
      return {
        mapStateToProps,
        mapDispatchToProps,
        component: reactComponent,
      };
    }
  ),
})); */
jest.mock("react-redux");
//this has to be import last since the mock affects it
import { ChannelContentContainer } from "../ChannelContentContainer";

//---------- mock store ------------
let mapStateToPropsObject;
let mapDispatchToPropsObject;
let connectedComponent;
const mock_state = {
  channels: [
    {
      id: "channel1",
      name: "greg",
      fetchStatus: "2",
      messages: [{ mesg: "3" }],
    },
    {
      id: "channel2",
      name: "greg1",
      fetchStatus: "2",
      messages: [{ mesg: "1" }],
    },
  ],
  activeChannel: "channel1",
  currentUser: {
    status: "active",
  },
};

//----------  ------------
describe("test mapStateToProps and mapDispatchToProps return objects and connected component", () => {
  beforeAll(() => {
    mapStateToPropsObject = ChannelContentContainer.mapStateToProps(
      fromJS(mock_state)
    );
    mapDispatchToPropsObject = ChannelContentContainer.mapDispatchToProps(
      () => {}
    );
    connectedComponent = ChannelContentContainer.component;
  });

  describe("mapStateToProps", () => {
    it("should return object with properties {messages, channelName, fetchStatus, status}", () => {
      const expectedmapStateToProps = [
        "messages",
        "channelName",
        "fetchStatus",
        "status",
      ];
      expect(Object.keys(mapStateToPropsObject)).toEqual(
        expectedmapStateToProps
      );
    });
  });

  describe("mapDispatchToProps", () => {
    it("should return an empty object", () => {
      expect(mapDispatchToPropsObject).toEqual({});
    });
  });

  describe("connect component", () => {
    it("connected component should be 'ChannelContent'", () => {
      expect(connectedComponent).toEqual(ChannelContent);
    });
  });
});
