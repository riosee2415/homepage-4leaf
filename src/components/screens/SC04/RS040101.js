import React from "react";
import Button from "@material-ui/core/Button";

class RS040101 extends React.Component {
  state = {
    software: false,
  };

  render() {
    const { software } = this.state;

    return (
      <div className="RS040101__screen">
        <div className="back">
          <div>dlkasdf</div>
          <div>dlkasdf</div>
          <div>dlkasdf</div>
          <div>dlkasdf</div>

          <div className="textBox">
            <div>tettet</div>
            <div>tetete</div>
            <div>tetete</div>
          </div>
        </div>
      </div>
    );
  }

  _changeSoftware = () => {
    const { software } = this.state;

    this.setState({
      software: !this.state.software,
    });
  };
}

export default RS040101;
