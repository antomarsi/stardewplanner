import React, { Component } from "react";
import Konva from "konva";
import { Stage, Layer, Circle } from "react-konva";

class EditorCanvas extends Component {
  state = {
    stageWidth: 1000
  };
  componentDidMount() {
    this.checkSize();
    // here we should add listener for "container" resize
    // take a look here https://developers.google.com/web/updates/2016/10/resizeobserver
    // for simplicity I will just listen window resize
    window.addEventListener("resize", this.checkSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkSize);
  }

  checkSize = () => {
    const width = this.container.offsetWidth;
    this.setState({
      stageWidth: width
    });
  };
  render() {
    const radius = this.state.stageWidth;
    return (
      <div
        style={{
          width: "100%",
        }}
        ref={node => {
          this.container = node;
        }}
      >
        <Stage width={this.state.stageWidth} height={window.innerHeight}>
          <Layer>
            <Circle x={radius} y={radius} radius={radius} fill="red" />
          </Layer>
        </Stage>
      </div>
    );
  }
}
export default EditorCanvas;
