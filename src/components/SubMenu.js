import React from "react";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import CallMissedOutgoingIcon from "@material-ui/icons/CallMissedOutgoing";

class SubMenu extends React.Component {
  render() {
    return (
      <div className="subMenu">
        <div className="subMenu__up">
          <DoneAllIcon style={{ fontSize: 10 }} />
          <div className="subMenu__up__title">{this.props.title}</div>
          <div className="subMenu__up__desc">{this.props.desc}</div>
        </div>
        <div className="subMenu__down">
          <span>
            {this.props.detailDesc}
            <span className="subMenu__down__icon">
              <CallMissedOutgoingIcon style={{ fontSize: 40 }} />
            </span>
          </span>
        </div>
      </div>
    );
  }
}

export default SubMenu;
