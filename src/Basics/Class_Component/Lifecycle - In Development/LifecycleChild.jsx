import React from "react";
const lifecycle = [];

class LifecycleComp extends React.Component {
  //Mount - Update - Unmount - Error
  constructor(props) {
    super(props);
    lifecycle.push("constructor ");
    console.log("AAAAAA");
  }

  static getDerivedStateFromProps() {
    lifecycle.push("getDerivedStateFromProps ");
    return null;
  }

  componentDidMount() {
    lifecycle.push("componentDidMount ");
  }

  shouldComponentUpdate() {
    lifecycle.push("shouldComponentUpdate ");
    return true;
  }

  getSnapshotBeforeUpdate() {
    lifecycle.push("getSnapshotBeforeUpdate ");
    return null;
  }

  componentDidUpdate() {
    lifecycle.push("componentDidUpdate ");
  }

  componentWillUnmount() {
    lifecycle.push("componentWillUnmount ");
  }

  //   static getDerivedStateFromError() {
  //     lifecycle.push("getDerivedStateFromError ");
  //     return { error: false };
  //   }

  //   componentDidCatch() {
  //     lifecycle.push("componentDidCatch ");
  //   }

  update = () => {
    lifecycle.splice(0, lifecycle.length);
    this.forceUpdate();
  };

  unmount = () => {
    lifecycle.splice(0, lifecycle.length);
    this.props.toggleMount();
  };

  //   error = () => {
  //     lifecycle.splice(0, lifecycle.length);
  //     this.setState({ error: true });
  //   };

  render() {
    lifecycle.push("render ");
    return (
      <React.Fragment>
        <p>{lifecycle}</p>
        <p onClick={this.unmount}>Click Me To Unmount</p>
        <p onClick={this.update}>Click Me To Update</p>
        {/* <p onClick={this.error}>Click Me To Error</p> */}
      </React.Fragment>
    );
  }
}

export default LifecycleComp;
