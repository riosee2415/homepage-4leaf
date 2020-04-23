import React from "react";

class SubMenu extends React.Component {
  render() {
    return (
      <div className="subMenu">
        <div>
          <div>{this.props.title}</div>
          <div>{this.props.desc}</div>
        </div>
        <div>
          <span>{this.props.detailDesc}</span>
        </div>
      </div>
    );
  }
}

export default SubMenu;
