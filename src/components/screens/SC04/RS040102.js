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
    tempraryAmount: "",
    customerEmail: "",
    customerName: "",
    currentStep: 1,
    amountLv1: false,
    amountLv2: false,
    amountLv3: false,
    amountLv4: false,

    // step-2
    questionDesc: "",
    questionTerm: "",
    questionRequest: "",
  };

  _doNotnextStepAlert = () => {
    confirmAlert({
      title: "문의사항을 모두 입력하셨나요?",
      message: "입력사항을 모두 채워주세요.",
      buttons: [
        {
          label: "확인",
          onClick: () => {},
        },
      ],
    });
  };

  _confirmEmailSend = () => {
    confirmAlert({
      title: "문의사항을 모두 작성하셨나요? 이메일을 발송하시겠습니까?",
      message: "발송된 이메일은 취소할 수 없습니다.",
      buttons: [
        {
          label: "이메일 발송",
          onClick: () => {
            () => this._nextStep();
          },
        },
        {
          label: "취소",
          onClick: () => {
            return;
          },
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
      tempraryAmount,
      amountLv1,
      amountLv2,
      amountLv3,
      amountLv4,
      questionDesc,
      questionTerm,
      customerEmail,
      customerName,
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
              <div className="rsb__contain">
                <div>step-1</div>
                <div className="pageActive">step-2</div>
                <div>step-3</div>
              </div>

              <div className="rsb__contain">
                <ul>
                  <li>🍀 원하는 작업 기간을 작성해주세요.</li>
                </ul>
              </div>

              <div className="rsb__contain">
                <input
                  type="text"
                  name="questionTerm"
                  id="questionTerm-js"
                  onChange={this._handleChangeValue}
                  placeholder="예) 2주"
                />
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

              <div className="rsb__contain">
                <ul>
                  <li>🍀 추가 요청사항이 있으신가요?</li>
                </ul>
              </div>
              <div className="rsb__contain">
                <input
                  className="rsb__contain__multi"
                  type="text"
                  rows="5"
                  name="questionRequest"
                  id="questionRequest-js"
                  onChange={this._handleChangeValue}
                  placeholder="추가 요청사항을 작성해주세요."
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
              <div className="rsb__contain">
                <div>step-1</div>
                <div>step-2</div>
                <div className="pageActive">step-3</div>
              </div>

              <div className="rsb__guide">
                <div className="rsb__guide__subject">
                  선택하신 문의사항 입니다.
                </div>

                {homepage ? (
                  <>
                    <div>홈페이지 문의</div>
                  </>
                ) : null}
                {groupWare ? (
                  <>
                    <div>그룹웨어 | ERP 문의</div>
                  </>
                ) : null}
                {mobile ? (
                  <>
                    <div>모바일 어플리케이션 문의</div>
                  </>
                ) : null}
                {outsourcing ? (
                  <>
                    <div>외주 관련 문의</div>
                  </>
                ) : null}
                {maintain ? (
                  <>
                    <div>유지보수 관련 문의</div>
                  </>
                ) : null}
              </div>

              <div className="rsb__guide">
                <div className="rsb__guide__subject">
                  선택하신 제작금액 입니다.
                </div>

                <div>{tempraryAmount}</div>
              </div>

              <div className="rsb__guide">
                <div className="rsb__guide__subject">
                  입력하신 이메일 주소 입니다.
                </div>

                <div>{customerEmail}</div>
              </div>

              <div className="rsb__guide">
                <div className="rsb__guide__subject">
                  입력하신 상호명(성명) 입니다.
                </div>

                <div>{customerName}</div>
              </div>

              <div className="rsb__guide">
                <div className="rsb__guide__subject">
                  요청하신 작업기간 입니다.
                </div>

                <div>{questionTerm}</div>
              </div>

              <div className="rsb__guide">
                <div className="rsb__guide__subject">
                  요청하신 작업내용 입니다.
                </div>

                <div>{questionDesc.substring(0, 50)}...</div>
              </div>

              <div className="rsb__containBtn">
                <button
                  className="complateStepBtn"
                  onClick={() => this._confirmEmailSend()}
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
      tempraryAmount: "100만원 이하",
    });
  };

  _isAmountLv2BtnHandler = () => {
    this.setState({
      amountLv2: !this.state.amountLv2,
      tempraryAmount: "100만원 이상, 300만원 이하",
    });
  };

  _isAmountLv3BtnHandler = () => {
    this.setState({
      amountLv3: !this.state.amountLv3,
      tempraryAmount: "300만원 이상, 500만원 이하",
    });
  };

  _isAmountLv4BtnHandler = () => {
    this.setState({
      amountLv4: !this.state.amountLv4,
      tempraryAmount: "500만원 이상",
    });
  };

  _nextStep = async () => {
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
      questionDesc,
      questionTerm,
      questionRequest,
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
      if (questionDesc.length < 1 || customerName.questionTerm < 1) {
        this._doNotnextStepAlert();
        return;
      }

      this.setState({
        currentStep: 3,
      });
    } else if (currentStep === 3) {
      const sendData = {
        homepage,
        groupWare,
        mobile,
        outsourcing,
        maintain,
        tempraryAmount,
        customerEmail,
        customerName,
        questionDesc,
        questionTerm,
        questionRequest,
      };

      const response = await fetch("/api/sendEmailEstimate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ sendData }),
      }).then(
        this.setState({
          currentStep: 1,
          homepage: false,
          groupWare: false,
          mobile: false,
          outsourcing: false,
          maintain: false,
          tempraryAmount: "",
          customerEmail: "",
          customerName: "",
          amountLv1: false,
          amountLv2: false,
          amountLv3: false,
          amountLv4: false,
        })
      );
    }
  };
}

export default RS040102;
