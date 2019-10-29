import React, { Component } from "react";
import Toolbar from "./Toolbar";
import layouts from "../../assets/data/layouts";
import Board from "./Editor/board";

class EditorCanvas extends Component {
  render() {
    return (
      <React.Fragment>
        <Board layout={layouts.regular} offsetHeight={66}/>
        <Toolbar />
      </React.Fragment>
    );
  }
}

export default EditorCanvas;
