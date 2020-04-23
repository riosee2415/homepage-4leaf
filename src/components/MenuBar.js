import React from "react";
import { NavLink } from "react-router-dom";

class MenuBar extends React.Component {
  render() {
    return (
      <div className="ma1__menu">
        <div className="ma1__menu__logo">
          <div>
            <NavLink to="/">LOGO</NavLink>
          </div>
        </div>

        <div className="ma1__menu__link">
          <div>
            <NavLink to="/intro">회사소개</NavLink>
          </div>
          <div>
            <NavLink to="/software">소프트웨어</NavLink>
          </div>
          <div>
            <NavLink to="/community">커뮤니티</NavLink>
          </div>
          <div>
            <NavLink to="/support">고객지원</NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuBar;
