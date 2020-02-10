import React, { Component } from "react";
import Toolbar from "./Toolbar";
import Engine from "../../services/engine";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { SetLoading, RemoveLoading } from "../../store/ducks/loading/actions";
import SideBar from "./Sidebar";
import classNames from "classnames";

class EditorCanvas extends Component {
  constructor() {
    super();
    this.state = {
      stageWidth: 1000,
      loading: null,
      sidebarList: []
    };
    this.offsetHeight = 65;
    this.engine = new Engine();
  }

  componentDidMount() {
    this.checkSize();
    this.engine
      .load(this.refs.canvas, this.refs.canvasUI, "regular", msg =>
        this.props.SetLoading("CANVAS_LOADING", msg)
      )
      .then(() => {
        this.props.RemoveLoading("CANVAS_LOADING");
        this.setState({
          sidebarList: [
            {
              title: "Tiles",
              items: this.engine.tiles.map(tile => ({
                id: tile.id,
                name: tile.name,
                img: tile.src
              }))
            },
            {
              title: "Buildings",
              items: this.engine.buildings.map(building => ({
                id: building.id,
                name: building.name,
                img: building.src
              }))
            }
          ]
        });
      })
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
    this.props.RemoveLoading("CANVAS_LOADING");
  }
  render() {
    const { sidebarOpen } = this.props;
    return (
      <div
        className={classNames(["editor", { toggled: !sidebarOpen }])}
        ref="container"
        id="wrapper"
      >
        <SideBar list={this.state.sidebarList} />
        <canvas
          id="canvas"
          ref="canvas"
          width={this.state.stageWidth}
          height={window.innerHeight - this.offsetHeight}
        />
        <canvas
          id="canvasUI"
          className="UI"
          ref="canvasUI"
          width={this.state.stageWidth}
          height={window.innerHeight - this.offsetHeight}
        />
        <Toolbar />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sidebarOpen: state.editor.sidebarOpen
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      SetLoading,
      RemoveLoading
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(EditorCanvas);
