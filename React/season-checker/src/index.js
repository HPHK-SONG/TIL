import React, { Component } from "react";
import ReactDOM from "react-dom";

import Spinner from "./Spinner";
import SeasonDisplay from "./SeasonDisplay";
import Error from "./Error";

class App extends Component {
  state = {
    lat: null,
    errorMessage: ""
  };

  renderContent() {
    const { lat, errorMessage } = this.state;

    //사용자가 허용한 경우
    if (lat && !errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    //사용자가 거부한 경우
    if (errorMessage && !lat) {
      return <Error />;
    }

    //사용자의 결정을 기다리는 중
    return <Spinner message="Where are you?" />;
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      error => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  render() {
    return <>{this.renderContent()}</>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
