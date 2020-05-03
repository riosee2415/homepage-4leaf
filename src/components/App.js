import React from "react";
import MenuBar from "./MenuBar";
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import {
  LS0000,
  LS0101,
  RS0000,
  RS0101,
  RS010101,
  RS010102,
  RS010103,
  RS010104,
  LS0201,
  RS0201,
  RS020101,
  RS020102,
  LS0301,
  RS0301,
  LS0401,
  RS0401,
  RS040101,
  RS040102,
  RS040103,
} from "./screens";

class App extends React.Component {
  state = {
    isMenuScreen: false,
  };

  render() {
    const { isMenuScreen } = this.state;

    return (
      <>
        <div className="background"></div>
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
                  <Route exact path="/intro/vision" component={LS0101} />
                  <Route exact path="/intro/history" component={LS0101} />
                  <Route exact path="/intro/organization" component={LS0101} />
                  <Route exact path="/intro/directions" component={LS0101} />
                  <Route exact path="/software" component={LS0201} />
                  <Route exact path="/software/product" component={LS0201} />
                  <Route exact path="/software/solution" component={LS0201} />
                  <Route exact path="/community" component={LS0301} />
                  <Route exact path="/support" component={LS0401} />
                  <Route exact path="/support/online" component={LS0401} />
                  <Route exact path="/support/estimate" component={LS0401} />
                  <Route exact path="/support/docs" component={LS0401} />
                </div>
              </div>
              <div className="mainArea__col-2">
                <Route exact path="/" component={RS0000} />
                <Route exact path="/intro" component={RS0101} />
                <Route exact path="/intro/vision" component={RS010101} />
                <Route exact path="/intro/history" component={RS010102} />
                <Route exact path="/intro/organization" component={RS010103} />
                <Route exact path="/intro/directions" component={RS010104} />
                <Route exact path="/software" component={RS0201} />
                <Route exact path="/software/product" component={RS020101} />
                <Route exact path="/software/solution" component={RS020102} />
                <Route exact path="/community" component={RS0301} />
                <Route exact path="/support" component={RS0401} />
                <Route exact path="/support/online" component={RS040101} />
                <Route exact path="/support/estimate" component={RS040102} />
                <Route exact path="/support/docs" component={RS040103} />
              </div>
            </>
          ) : (
            <>
              <div className="mainArea__main">
                <div className="favicon_ani"></div>
                <div className="mainArea__textBox">
                  <div className="textBox">
                    <div className="main__text">4LEAF</div>
                  </div>
                  <div className="main__des">
                    <svg>
                      <symbol id="fade-text">
                        <text x="23%" y="35%" textAnchor="middle">
                          한번 더 눈이가는,
                        </text>
                        <text x="50%" y="60%" textAnchor="middle">
                          계속 보고싶은 결과물로 보여드리겠습니다.
                        </text>
                      </symbol>
                      <g>
                        <use className="stroke" xlinkHref="#fade-text" />
                        <use className="fill" xlinkHref="#fade-text" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="copy">
                  COPYRIGHT 2020 4LEAFSOFT ALL RIGHTS RESERVED
                </div>
                <div className="copy__right">
                  <NavLink to="/support/online">
                    <div
                      className="contact"
                      onClick={() => this._setMenuScreen()}
                    >
                      <span className="contactUs">문의하기</span>
                      <span className="line"></span>
                      <div className="contact-icon">
                        <ContactMailIcon />
                      </div>
                    </div>
                  </NavLink>
                  <a
                    className="insta"
                    target="_blank"
                    href="https://www.instagram.com/4leaf_dev/"
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </div>
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
