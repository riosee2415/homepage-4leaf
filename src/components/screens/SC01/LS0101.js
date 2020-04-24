import React from "react";
import { Link } from "react-router-dom";

class LS0101 extends React.Component {
  render() {
    return (
      <div className="LS0101__screen">
        <div className="LS0101_MainTitle">
          4LEAF
          <br />
          SOFTWARE
        </div>
        <div className="LS0101__subMenu">
          <div>
            <Link to="/intro/vision">#비전</Link>
          </div>
          <div>#연혁</div>
          <div>
            <Link to="/intro/organization">#조직도</Link>
          </div>
          <div>
            <Link to="/intro/directions">#오시는 길</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LS0101;
