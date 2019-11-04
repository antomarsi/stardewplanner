import React, { Component } from "react";
import { useSelector } from "react-redux";

class JumpingLetters extends Component {
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
      if (this.state.letterIndexJump >= this.props.message.length) {
        this.setState({ letterIndexJump: 0 });
      } else {
        let index = this.state.letterIndexJump + 1;
        if (this.props.message[index] === " ") {
          ++index;
        }
        this.setState({ letterIndexJump: index });
      }
    }
  };

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <div id="loader-message">
        {[...this.props.message].map((letter, index) => (
          <span
            key={index}
            className={index === this.state.letterIndexJump ? "jumping" : ""}
          >
            {letter}
          </span>
        ))}
      </div>
    );
  }
}

const LoadingComponent = () => {
  const { loading } = useSelector(state => state.loading);

  const hasLoading = loading && loading.length > 0;
console.log(loading);
  return (
    <div id="loader-wrapper" className={!hasLoading ? "loaded" : ""}>
      <div id="loader"/>
      {hasLoading && loading[0].message && (
        <JumpingLetters message={loading[0].message} />
      )}
    </div>
  );
};

export default LoadingComponent;
