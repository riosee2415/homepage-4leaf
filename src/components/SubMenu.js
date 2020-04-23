import React from "react";

class SubMenu extends React.Component {
  render() {
    return (
      <div className="subMenu">
        <div className="subMenu__up">
          <div>{this.props.title}</div>
          <div>{this.props.desc}</div>
        </div>
        <div className="subMenu__down">
          <span>{this.props.detailDesc}</span>
        </div>
      </div>
    );
  }
}

export default SubMenu;
