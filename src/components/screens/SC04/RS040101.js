import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

class RS040101 extends React.Component {
  state = {
    isSoftware: false,
    isCooper: false,
    isRepair: false,
    isHowUse: false,
    sendBtnClassName: "sendDataBtn",
    customerEmail: "",
    costomerDesc: "",
  };

  _sendConfirm = () => {
    const { customerEmail, costomerDesc } = this.state;

    if (customerEmail.length < 1 || costomerDesc < 1) {
      return;
    }

    confirmAlert({
      title: "담당자에게 문의내용을 전송하시겠습니까?",
      message: "전송된 내용은 수정할 수 없습니다.",
      buttons: [
        {
          label: "예",
          onClick: () => this._sendDataBtnHandler(),
        },
        {
          label: "아니오",
          onClick: () => {},
        },
      ],
    });
  };

  render() {
    const {
      isSoftware,
      isCooper,
      isRepair,
      isHowUse,
      sendBtnClassName,
    } = this.state;

    return (
      <div className="RS040101__screen">
        <div className="RS040101__screen__box rsb">
          <div className="rsb__contain">
            <ul>
              <li>문의하실 내용의 주제를 선택해주세요.</li>
              <li>정확한 선택은 빠르고 정확한 답변을 받을 수 있습니다.</li>
            </ul>
          </div>

          {/* btnArea start*/}
          <div className="rsb__btnArea">
            <button
              className={
                isSoftware ? "rsb__btnArea__selectBtn" : "rsb__btnArea__Btn"
              }
              onClick={() => this._softwareBtnHandler()}
            >
              소프트웨어 문의
            </button>
            <button
              className={
                isCooper ? "rsb__btnArea__selectBtn" : "rsb__btnArea__Btn"
              }
              onClick={() => this._cooperBtnHandler()}
            >
              개발사 협력 문의
            </button>
            <button
              className={
                isRepair ? "rsb__btnArea__selectBtn" : "rsb__btnArea__Btn"
              }
              onClick={() => this._repairBtnHandler()}
            >
              유지보수 문의
            </button>
            <button
              className={
                isHowUse ? "rsb__btnArea__selectBtn" : "rsb__btnArea__Btn"
              }
              onClick={() => this._howUseBtnHandler()}
            >
              솔루션/제품 사용 문의
            </button>
          </div>
          {/* btnArea end*/}

          {/* input Email */}
          <div className="rsb__contain">
            <ul>
              <li>답변 받으실 이메일을 작성해주세요.</li>
            </ul>
          </div>

          <div className="rsb__contain">
            <input
              type="text"
              name="customerEmail"
              id="customerEmail-js"
              onChange={this._handleChangeValue}
            />
          </div>
          {/* input Email */}

          {/* input Content */}
          <div className="rsb__contain">
            <ul>
              <li>문의 내용을 작성해주세요.</li>
            </ul>
          </div>

          <div className="rsb__contain">
            <input
              className="rsb__contain__multi"
              type="text"
              rows="5"
              name="costomerDesc"
              id="costomerDesc-js"
              onChange={this._handleChangeValue}
            />
          </div>
          {/* input Content */}

          <div className="rsb__contain">
            <button
              className={sendBtnClassName}
              onClick={() => this._sendConfirm()}
            >
              문의내용 전송하기
            </button>
          </div>
        </div>
      </div>
    );
  }

  _handleChangeValue = (event) => {
    let nextState = {};
    nextState[event.target.name] = event.target.value;
    this.setState(nextState);
  };

  _sendDataBtnHandler = async () => {
    const {
      customerEmail,
      costomerDesc,
      isSoftware,
      isCooper,
      isRepair,
      isHowUse,
    } = this.state;

    document.getElementById("customerEmail-js").value = "";
    document.getElementById("costomerDesc-js").value = "";

    const sendData = {
      customerEmail,
      costomerDesc,
      isSoftware,
      isCooper,
      isRepair,
      isHowUse,
    };

    this.setState({
      sendBtnClassName: "sendDataBtnClick",
      customerEmail: "",
      costomerDesc: "",
      isSoftware: false,
      isCooper: false,
      isRepair: false,
      isHowUse: false,
    });

    setTimeout(() => {
      this.setState({
        sendBtnClassName: "sendDataBtn",
      });
    }, 1200);

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ sendData }),
    });
  };

  _softwareBtnHandler = () => {
    const { isSoftware } = this.state;

    this.setState({
      isSoftware: !this.state.isSoftware,
    });
  };

  _cooperBtnHandler = () => {
    const { isCooper } = this.state;

    this.setState({
      isCooper: !this.state.isCooper,
    });
  };

  _repairBtnHandler = () => {
    const { isRepair } = this.state;

    this.setState({
      isRepair: !this.state.isRepair,
    });
  };

  _howUseBtnHandler = () => {
    const { isHowUse } = this.state;

    this.setState({
      isHowUse: !this.state.isHowUse,
    });
  };
}

export default RS040101;
