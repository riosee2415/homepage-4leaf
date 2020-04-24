import React from "react";
import { NavLink } from "react-router-dom";

class MenuBar extends React.Component {
  state = {
    isMenuOpen: false,
    openBarClassName: "openMenuBar",
    closeBarClassName: "closeMenuBar",
    menuCloseClassName: "",
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
    } = this.state;
    return (
      <div className="ma1__menu">
        <div className="ma1__menu__logo">
          <div onClick={() => this.props.setMainFunc()}>
            <NavLink to="/">LOGO</NavLink>
          </div>
        </div>
        <div className={openBarClassName} onClick={() => this._visibleMenu()}>
          <span className="line"></span>
          <span className="line2"></span>
          <span className="line"></span>
        </div>

        {isMenuOpen ? (
          <div className="ma1__menu__link" id="menu">
            <div
              className={closeBarClassName}
              id="openMenuBar-js"
              onClick={() => [this._visibleMenu(), this._clickClose()]}
            >
              <span className="line"></span>
              <span className="line2"></span>
              <span className="line"></span>
            </div>
            <div
              className="menu__link__list"
              onClick={() => this._visibleMenu()}
            >
              <div
                className={menuCloseClassName}
                onClick={() => this.props.setMenuFunc()}
              >
                <NavLink to="/intro">회사소개</NavLink>
              </div>
              <div
                className={menuCloseClassName}
                onClick={() => this.props.setMenuFunc()}
              >
                <NavLink to="/software">소프트웨어</NavLink>
              </div>
              <div
                className={menuCloseClassName}
                onClick={() => this.props.setMenuFunc()}
              >
                <NavLink to="/community">커뮤니티</NavLink>
              </div>
              <div
                className={menuCloseClassName}
                onClick={() => this.props.setMenuFunc()}
              >
                <NavLink to="/support">고객지원</NavLink>
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
      menuCloseClassName: "close",
    });
  };

  _visibleMenu = () => {
    if (this.state.isMenuOpen) {
      this.setState({
        closeBarClassName: "closeMenuBar close",
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
      menuCloseClassName: "",
    });
  };
}

export default MenuBar;
