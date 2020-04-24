import React from "react";
import MenuBar from "./MenuBar";
import { Route } from "react-router-dom";
import {
  LS0000,
  LS0101,
  RS0000,
  RS0101,
  LS0201,
  RS0201,
  LS0301,
  RS0301,
  LS0401,
  RS0401,
  RS040101,
} from "./screens";

class App extends React.Component {
  state = {
    isMenuScreen: false,
  };

  render() {
    const { isMenuScreen } = this.state;

    return (
      <>
        <MenuBar
          setMenuFunc={this._setMenuScreen}
          setMainFunc={this._setMainScreen}
        />
        <div className="mainArea">
          {isMenuScreen ? (
            <>
              <div className="mainArea__col-1 ma1">
                <div className="ma1__content">
                  <Route exact path="/" component={LS0000} />
                  <Route exact path="/intro" component={LS0101} />
                  <Route exact path="/software" component={LS0201} />
                  <Route exact path="/community" component={LS0301} />
                  <Route exact path="/support" component={LS0401} />
                  <Route exact path="/support/online" component={LS0401} />
                </div>
              </div>
              <div className="mainArea__col-2">
                <Route exact path="/" component={RS0000} />
                <Route exact path="/intro" component={RS0101} />
                <Route exact path="/software" component={RS0201} />
                <Route exact path="/community" component={RS0301} />
                <Route exact path="/support" component={RS0401} />
                <Route exact path="/support/online" component={RS040101} />
              </div>
            </>
          ) : (
            <>
              <div className="mainArea__main"></div>
            </>
          )}
        </div>
      </>
    );
  }

  _changeMenuBar = () => {
    const { isMenuOpen } = this.state;

    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  };

  _setMenuScreen = () => {
    this.setState({
      isMenuScreen: true,
    });
  };

  _setMainScreen = () => {
    this.setState({
      isMenuScreen: false,
    });
  };
}

export default App;
