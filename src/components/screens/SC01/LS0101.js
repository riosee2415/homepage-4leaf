import React from "react";
import SubMenu from "../../SubMenu";

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
          <SubMenu title="#비전" />
          <SubMenu title="#조직도" />
          <SubMenu title="#오시는 길" />
        </div>
      </div>
    );
  }
}

export default LS0101;
