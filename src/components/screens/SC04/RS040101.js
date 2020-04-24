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
        <Button
          variant={software ? "contained" : "outlined"}
          color={software ? "primary" : "default"}
          onClick={() => this._changeSoftware()}
        >
          소프트웨어 문의
        </Button>
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
