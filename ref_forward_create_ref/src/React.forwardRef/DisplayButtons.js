import React from "react";

import { FancyButton, FancyButtonRefForward } from "./ButtonForwardRef";
import RefferencekeptinArray from "./RefferencekeptinArray";
import AutomaticInputFocus from "./AutomaticInputFocus";

const refForward = React.createRef();
{
  /*React.Fragment doesnt create any addtional markup so it has advantage to <div> */
}
const Display = () => (
  <React.Fragment>
    <FancyButton>Button 1</FancyButton>
    <FancyButtonRefForward ref={refForward}>
      FancyButtonRefForward
    </FancyButtonRefForward>
    <h5> Ref kept in an array click on buttons to see their refference</h5>
    <RefferencekeptinArray>click me ! </RefferencekeptinArray>
    <h5>Automatic focus on input using refference</h5>
    <AutomaticInputFocus myRef={x => x && x.focus()} />
  </React.Fragment>
);

export default Display;
