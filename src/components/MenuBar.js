import React from "react";
import { NavLink } from "react-router-dom";

class MenuBar extends React.Component {
  state = {
    isMenuOpen: false,
    openBarClassName: "openMenuBar",
    closeBarClassName: "closeMenuBar",
    menuCloseClassName: "btn btn__ani",
    menuLink: "ma1__menu__link",
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      isMenuOpen,
      openBarClassName,
      closeBarClassName,
      menuCloseClassName,
      menuLink,
    } = this.state;
    return (
      <div className="ma1__menu">
        <div className="ma1__menu__logo">
          <div onClick={() => this.props.setMainFunc()}>
            <NavLink to="/">
              <div className="logo"></div>
            </NavLink>
          </div>
        </div>
        <div className={openBarClassName} onClick={() => this._visibleMenu()}>
          <span className="line"></span>
          <span className="line2"></span>
          <span className="line"></span>
        </div>

        {isMenuOpen ? (
          <div className={menuLink} id="menu">
            <div
              className={closeBarClassName}
              id="openMenuBar-js"
              onClick={() => [this._visibleMenu(), this._clickClose()]}
            >
              <span className="line"></span>
              <span className="line2"></span>
              <span className="line"></span>
            </div>
            <div className="menu__link__list">
              <div
                className={menuCloseClassName}
                onClick={() => this.props.setMenuFunc()}
              >
                <NavLink to="/intro">
                  <span className="ko">회사소개</span>
                  <span className="en">Introduce</span>
                </NavLink>
              </div>
              <div
                className={menuCloseClassName}
                onClick={() => this.props.setMenuFunc()}
              >
                <NavLink to="/software">
                  <span className="ko">소프트웨어</span>
                  <span className="en">Software</span>
                </NavLink>
              </div>
              <div
                className={menuCloseClassName}
                onClick={() => this.props.setMenuFunc()}
              >
                <NavLink to="/community">
                  <span className="ko">커뮤니티</span>
                  <span className="en">Community</span>
                </NavLink>
              </div>
              <div
                className={menuCloseClassName}
                onClick={() => this.props.setMenuFunc()}
              >
                <NavLink to="/support">
                  <span className="ko">고객지원</span>
                  <span className="en">Support</span>
                </NavLink>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }

  _clickClose = () => {
    this.setState({
      openBarClassName: "openMenuBar",
    });
  };

  _visibleMenu = () => {
    if (this.state.isMenuOpen) {
      this.setState({
        closeBarClassName: "closeMenuBar close",
        menuLink: "ma1__menu__link close",
        menuCloseClassName: "btn btn__ani close",
      });

      setTimeout(() => {
        this.setState({
          isMenuOpen: !this.state.isMenuOpen,
          openBarClassName: "openMenuBar",
        });
      }, 700);

      return;
    }

    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
      openBarClassName: "closeMenuBar",
      menuLink: "ma1__menu__link",
      menuCloseClassName: "btn btn__ani",
    });
  };
}

export default MenuBar;
