import React from "react";

class StateComp extends React.Component {
  state = {
    text: "Before Setting State - Click Me To Set State",
  };

  setTheState = () => {
    this.setState((prevState) => {
      prevState.text = "After Setting State";
      return prevState;
    });

    //Basics
    /*
    this.setState(() => { return >New Object<});  --- This will set the state to include the properties of = >New Object<
    setState causes a re-render, re-rendering and calling ComponentDidUpdate for this component and all child components
    this.setState is Async
    */

    //More Info
    /*
    this.setState( ( previousState ) => { previousState.newProperty = "String"; return previousState; } , this.onStateSet() );
    previousState = This Components State Before Setting It, Its Grabbing The State Upon setState Being Invoked
    Using This We Can Modify / Add previousState And Return That As The New State To Be Set
    this.onStateSet --- This Is A Callback Function That Will Be Called Upon State Being Set Successfully
    */
  };

  render() {
    // onClick is an event, it calls the setTheState Function when the component is clicked
    // For a list of all events click here https://reactjs.org/docs/events.html
    return <p onClick={this.setTheState}>{this.state.text}</p>;
  }
}

export default StateComp;
