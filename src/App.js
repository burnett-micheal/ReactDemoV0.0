import React from "react";
import ClassComp from "./Basics/Component_Creation/ClassComp";
import FunctionalComp from "./Basics/Component_Creation/FunctionalComp";
import PropsComp from "./Basics/Props/PropsComp";
import StateComp from "./Basics/Class_Component/StateComp";
import LifecycleComp from "./Basics/Class_Component/Lifecycle/LifecycleComp";
import {declare, expression, arrow} from "./Basics/Functions/functions";

// There Are 2 Ways To Import / Export
// 1. export default exportName --- import exportName from "pathToFile"
// 2. export {exportName1, exportName2, exportName3} --- import {exportName1, exportName2, exportName3} from "pathToFile"
// The Path To File Is Done In . Notation ./ Is Sibling ../ Is 1 Parent Up ../../ Is 2 Parents Up And So On
// You Can Then Use exportName In The File You imported It To

class App extends React.Component {
  componentDidMount(){
    //componentDidMount Is Called As Soon As The Component Is First Loaded In
    this.logFunctions();
  }

  componentDidUpdate(){
    //componentDidUpdate Is Called Every Time forceUpdate or setState is called and forces a re-render
  }

  logFunctions = () => {
    console.log(declare());
    console.log(expression());
    console.log(arrow());
  };

  render() {
    return (
    <React.Fragment>
      {/* We Can Only Return 1 Parent Component At A Time, React.Fragment Is A Workaround */}
      {/* There Are 3 Types Of Hierarchal Elements - Parent, Child, And Sibling*/}
      {/* { } Are Used Within Markdown Elements To Use Javascript Code Within, Like This Comment */}
      <ClassComp />
      <FunctionalComp />
      <PropsComp propExample="This Is A Prop Example"/>
      <StateComp />
      {/* <LifecycleComp /> Currently In Development*/}
    </React.Fragment>
    );
  }
}

export default App;