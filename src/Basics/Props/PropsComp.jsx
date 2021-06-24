import React from "react";
import PropSender from "./PropSender";
//Its Also Worth Looking Into PropTypes, Allows You To Verify The Right Props Have Been Passed In

class PropsComp extends React.Component {
  render() {
    return <PropSender />;
  }
}

export default PropsComp;
