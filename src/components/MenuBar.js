import React from "react";
import { NavLink } from "react-router-dom";

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.setMenuFunc);
    return (
      <div className="ma1__menu">
        <div className="ma1__menu__logo">
          <div onClick={() => this.props.setMainFunc()}>
            <NavLink to="/">LOGO</NavLink>
          </div>
        </div>
        <input type="checkbox" id="menu_button" />
        <label htmlFor="menu_button" id="menu_button">
          <span className="line"></span>
          <span className="line2"></span>
          <span className="line"></span>
        </label>
        <div className="ma1__menu__link" id="menu">
          <label htmlFor="menu_button" id="menu_close">
            <span className="line"></span>
            <span className="line2"></span>
            <span className="line"></span>
          </label>
          <div className="menu__link__list">
            <div onClick={() => this.props.setMenuFunc()}>
              <NavLink to="/intro">회사소개</NavLink>
            </div>
            <div onClick={() => this.props.setMenuFunc()}>
              <NavLink to="/software">소프트웨어</NavLink>
            </div>
            <div onClick={() => this.props.setMenuFunc()}>
              <NavLink to="/community">커뮤니티</NavLink>
            </div>
            <div onClick={() => this.props.setMenuFunc()}>
              <NavLink to="/support">고객지원</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuBar;
