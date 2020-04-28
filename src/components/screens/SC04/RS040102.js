import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

class RS040102 extends React.Component {
  state = {
    // step-1
    homepage: false,
    groupWare: false,
    mobile: false,
    outsourcing: false,
    maintain: false,
    tempraryAmount: "0원",
    customerEmail: "",
    customerName: "",
    currentStep: 1,
    amountLv1: false,
    amountLv2: false,
    amountLv3: false,
    amountLv4: false,

    // step-2
    questionDesc: "",
  };

  _doNotnextStepAlert = () => {
    confirmAlert({
      title: "문의사항을 모두 입력하셨나요?",
      message: "다시 확인해주세요",
      buttons: [
        {
          label: "확인",
          onClick: () => {},
        },
      ],
    });
  };

  render() {
    const {
      homepage,
      groupWare,
      mobile,
      outsourcing,
      maintain,
      currentStep,
      amountLv1,
      amountLv2,
      amountLv3,
      amountLv4,
      questionDesc,
    } = this.state;

    return (
      <div className="RS040102__screen">
        <div className="RS040102__screen__box">
          {/* STEP - 1  */}
          {currentStep === 1 ? (
            <>
              <div className="rsb__contain">
                <div className="pageActive">step-1</div>
                <div>step-2</div>
                <div>step-3</div>
              </div>

              <div className="rsb__contain">
                <ul>
                  <li>🍀 어떤 소프트웨어 제작 금액이 궁굼하신가요?</li>
                  <li>
                    🍀 비용절감, 높은 퀄리티, 실용성 있는 소프트웨어 제작을
                    약속드립니다.
                  </li>
                </ul>
              </div>

              {/* btnArea start*/}
              <div className="rsb__btnArea">
                <button
                  className={
                    homepage ? "rsb__btnArea__selectBtn2" : "rsb__btnArea__Btn"
                  }
                  onClick={() => this._isHompageBtnHandler()}
                >
                  홈페이지 제작
                </button>
                <button
                  className={
                    groupWare ? "rsb__btnArea__selectBtn2" : "rsb__btnArea__Btn"
                  }
                  onClick={() => this._isGroupWareBtnHandler()}
                >
                  그룹웨어 | ERP 계열
                </button>
                <button
                  className={
                    mobile ? "rsb__btnArea__selectBtn2" : "rsb__btnArea__Btn"
                  }
                  onClick={() => this._isMobileBtnHandler()}
                >
                  모바일 어플리케이션
                </button>

                <button
                  className={
                    outsourcing
                      ? "rsb__btnArea__selectBtn2"
                      : "rsb__btnArea__Btn"
                  }
                  onClick={() => this._isOutsourcingBtnHandler()}
                >
                  외주 관련 문의
                </button>
                <button
                  className={
                    maintain ? "rsb__btnArea__selectBtn2" : "rsb__btnArea__Btn"
                  }
                  onClick={() => this._isMaintainBtnHandler()}
                >
                  유지보수 문의
                </button>
              </div>
              {/* btnArea end*/}

              <div className="rsb__contain">
                <ul>
                  <li>🍀 생각해두신 금액이 있으세요?</li>
                  <li>
                    🍀 참고를 위해 시중에 거래되어지는 통상금액을
                    안내해드리겠습니다.
                  </li>
                  <li className="rsb__contain__subDesc">
                    일반적인 홈페이지 제작 : 100만원 ~ 300만원
                  </li>
                  <li className="rsb__contain__subDesc">
                    모바일 어플리케이션 제작 : 300만원 이상
                  </li>
                  <li className="rsb__contain__subDesc">
                    그룹웨어 및 ERP 계열 시스템 제작 : 2000만원 이상
                  </li>
                </ul>
              </div>

              <div className="rsb__btnArea">
                <button
                  className={
                    amountLv1 ? "rsb__btnArea__selectBtn2" : "rsb__btnArea__Btn"
                  }
                  onClick={() => this._isAmountLv1BtnHandler()}
                >
                  100만원 이하
                </button>

                <button
                  className={
                    amountLv2 ? "rsb__btnArea__selectBtn2" : "rsb__btnArea__Btn"
                  }
                  onClick={() => this._isAmountLv2BtnHandler()}
                >
                  100만원 ~ 300만원
                </button>

                <button
                  className={
                    amountLv3 ? "rsb__btnArea__selectBtn2" : "rsb__btnArea__Btn"
                  }
                  onClick={() => this._isAmountLv3BtnHandler()}
                >
                  300만원 ~ 500만원
                </button>

                <button
                  className={
                    amountLv4 ? "rsb__btnArea__selectBtn2" : "rsb__btnArea__Btn"
                  }
                  onClick={() => this._isAmountLv4BtnHandler()}
                >
                  500만원 이상
                </button>
              </div>

              <div className="rsb__contain">
                <ul>
                  <li>🍀 답변 받으실 이메일을 작성해주세요.</li>
                </ul>
              </div>
              <div className="rsb__contain">
                <input
                  type="text"
                  name="customerEmail"
                  id="customerEmail-js"
                  placeholder="4leaf@4leaf.com"
                  onChange={this._handleChangeValue}
                />
              </div>

              <div className="rsb__contain">
                <ul>
                  <li>
                    🍀 문의하시는 사업체의 상호명 또는 고객 성함을 작성해주세요.
                  </li>
                </ul>
              </div>
              <div className="rsb__contain">
                <input
                  type="text"
                  name="customerName"
                  id="customerName-js"
                  placeholder="포립 소프트웨어"
                  onChange={this._handleChangeValue}
                />
              </div>

              <div className="rsb__containBtn">
                <button
                  className="nextStepBtn"
                  onClick={() => this._nextStep()}
                >
                  계속
                </button>
              </div>
            </>
          ) : null}

          {/* STEP - 2  */}
          {currentStep === 2 ? (
            <>
              <div className="rsb__contain__checked">
                {homepage ? (
                  <div className="rsb__chekckedBtn">홈페이지 제작</div>
                ) : null}
                {groupWare ? (
                  <div className="rsb__chekckedBtn">
                    그룹웨어 | ERP계열 제작
                  </div>
                ) : null}
                {mobile ? (
                  <div className="rsb__chekckedBtn">
                    모바일 어플리케이션 제작
                  </div>
                ) : null}
                {outsourcing ? (
                  <div className="rsb__chekckedBtn">외주 관련 문의</div>
                ) : null}
                {maintain ? (
                  <div className="rsb__chekckedBtn">유지보수 문의</div>
                ) : null}
              </div>

              <div className="rsb__contain">
                <ul>
                  <li>🍀 문의 내용을 작성해주세요.</li>
                </ul>
              </div>
              <div className="rsb__contain">
                <input
                  className="rsb__contain__multi"
                  type="text"
                  rows="5"
                  name="questionDesc"
                  id="questionDesc-js"
                  onChange={this._handleChangeValue}
                  placeholder="문의내용을 작성해주세요."
                />
              </div>

              <div className="rsb__containBtn">
                <button
                  className="nextStepBtn"
                  onClick={() => this._nextStep()}
                >
                  계속
                </button>
              </div>
            </>
          ) : null}

          {/* STEP - 3  */}
          {currentStep === 3 ? (
            <>
              <div className="rsb__containBtn">
                <button
                  className="complateStepBtn"
                  onClick={() => this._nextStep()}
                >
                  작성완료
                </button>
              </div>
            </>
          ) : null}
        </div>
      </div>
    );
  }

  _handleChangeValue = (event) => {
    let nextState = {};
    nextState[event.target.name] = event.target.value;
    this.setState(nextState);
  };

  _isHompageBtnHandler = () => {
    this.setState({
      homepage: !this.state.homepage,
    });
  };

  _isGroupWareBtnHandler = () => {
    this.setState({
      groupWare: !this.state.groupWare,
    });
  };

  _isMobileBtnHandler = () => {
    this.setState({
      mobile: !this.state.mobile,
    });
  };

  _isOutsourcingBtnHandler = () => {
    this.setState({
      outsourcing: !this.state.outsourcing,
    });
  };

  _isMaintainBtnHandler = () => {
    this.setState({
      maintain: !this.state.maintain,
    });
  };

  _isAmountLv1BtnHandler = () => {
    this.setState({
      amountLv1: !this.state.amountLv1,
    });
  };

  _isAmountLv2BtnHandler = () => {
    this.setState({
      amountLv2: !this.state.amountLv2,
    });
  };

  _isAmountLv3BtnHandler = () => {
    this.setState({
      amountLv3: !this.state.amountLv3,
    });
  };

  _isAmountLv4BtnHandler = () => {
    this.setState({
      amountLv4: !this.state.amountLv4,
    });
  };

  _nextStep = () => {
    const {
      currentStep,
      homepage,
      groupWare,
      mobile,
      outsourcing,
      maintain,
      tempraryAmount,
      customerEmail,
      customerName,
    } = this.state;

    if (currentStep === 1) {
      if (customerEmail.length < 1 || customerName.length < 1) {
        this._doNotnextStepAlert();
        return;
      }

      this.setState({
        currentStep: 2,
      });
    } else if (currentStep === 2) {
      console.log("3번째 화면으로 이동");
      this.setState({
        currentStep: 3,
      });
    } else if (currentStep === 3) {
      console.log("이메일 전송");
      this.setState({
        currentStep: 1,
        homepage: false,
        groupWare: false,
        mobile: false,
        outsourcing: false,
        maintain: false,
      });
    }
  };
}

export default RS040102;
