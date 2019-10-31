import React, { Component } from "react";
import Toolbar from "./Toolbar";
import Engine from "../../services/engine";

class EditorCanvas extends Component {
  constructor() {
    super();
    this.state = {
      stageWidth: 1000,
      loading: null
    };
    this.offsetHeight = 65;
    this.engine = new Engine();
  }
  componentDidMount() {
    this.checkSize();
    this.engine
      .load(this.refs.canvas, "regular", msg => this.setState({ loading: msg }))
      .then(() => this.setState({ loading: null }))
      .catch(err => {
        console.error(err);
      });
    window.addEventListener("resize", this.checkSize);
  }

  checkSize = () => {
    const width = this.refs.container.offsetWidth;
    this.setState({
      stageWidth: width
    });
  };
  componentWillUnmount() {
    window.removeEventListener("resize", this.checkSize);
  }
  render() {
    return (
      <div className="editor" ref="container">
        <canvas
          id="canvas"
          ref="canvas"
          width={this.state.stageWidth}
          height={window.innerHeight - this.offsetHeight}
        />
        <Toolbar />
      </div>
    );
  }
}

export default EditorCanvas;
