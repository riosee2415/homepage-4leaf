import React from "react";
import { NavLink } from "react-router-dom";

class LS0101 extends React.Component {
  render() {
    return (
      <div className="LS0101__screen">
        <div className="LS0101_MainTitle">
          4LEAF
          <br />
          SOFTWARE
        </div>
        <div className="LS0101_des">
          <div>* 해시태그를 클릭해주세요.</div>
        </div>
        <div className="LS0101__subMenu">
          <div>
            <NavLink
              to="/intro/vision"
              activeStyle={{
                fontWeight: "bold",
                color: "blue",
              }}
            >
              <span>#비전</span>
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/intro/history"
              activeStyle={{
                fontWeight: "bold",
                color: "blue",
              }}
            >
              #연혁
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/intro/organization"
              activeStyle={{
                fontWeight: "bold",
                color: "blue",
              }}
            >
              #조직도
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/intro/directions"
              activeStyle={{
                fontWeight: "bold",
                color: "blue",
              }}
            >
              #오시는 길
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default LS0101;
