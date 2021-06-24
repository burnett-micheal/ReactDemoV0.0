import React from "react";
import LifecycleChild from "./LifecycleChild";
let mount = false;

class LifecycleComp extends React.Component {
  state = {
    mount: false,
  };

  toggleMount = () => {
    console.log(mount);
    mount = mount ? false : true;
    console.log(mount);
    this.forceUpdate();
  };

  render() {
    return (
      <React.Fragment>
        {mount ? (
          <LifecycleChild toggleMount={this.toggleMount} />
        ) : (
          <p onClick={this.toggleMount}>Click Me To mount</p>
        )}
      </React.Fragment>
    );
  }
}

export default LifecycleComp;
