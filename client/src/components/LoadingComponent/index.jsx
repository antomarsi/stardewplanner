import React, { Component } from "react";
import { Spinner } from "reactstrap";
import Proptypes from "prop-types";

class LoadingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: null,
      letterIndexJump: 0
    };
  }
  componentDidMount() {
    let intervalId = setInterval(this.timer, 300);
    this.setState({ intervalId });
  }

  timer = () => {
    if (this.props.message) {
      console.log(this.state.letterIndexJump, this.props.message.length);
      if (this.state.letterIndexJump >= this.props.message.length) {
        this.setState({ letterIndexJump: 0 });
      } else {
        let letterIndexJump = ++this.state.letterIndexJump;
        if (this.props.message[letterIndexJump] === " ") {
          ++letterIndexJump;
        }
        this.setState({ letterIndexJump });
      }
    }
  };
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  render() {
    const { message } = this.props;
    const { letterIndexJump } = this.state;
    return (
      <div className="spinner-loading">
        <div className="spinners">
          <Spinner color="yellow" style={{ height: "4rem", width: "4rem" }} />
          <Spinner
            color="secondary"
            type="grow"
            style={{ height: "4rem", width: "4rem" }}
          />
        </div>
        {message && (
          <div className="message">
            {[...message].map((letter, index) => (
              <span className={index === letterIndexJump ? "jumping" : ""}>
                {letter}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }
}

LoadingComponent.propTypes = {
  message: Proptypes.string
};

export default LoadingComponent;
