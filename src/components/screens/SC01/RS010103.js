import React from "react";

class RS0101 extends React.Component {
  state = {
    imgURL: "",
    isLoading: false,
  };

  componentDidMount = async () => {
    await this.setState({
      imgURL: "../../assets/ddafsd/asdfasdf",
      isLoading: true,
    });
  };

  render() {
    const { isLoading, imgURL } = this.state;

    return (
      <div className="RS010103__screen">
        <div className="RS010103__content">
          <div className="RS010103__mainTitle">#조직도</div>
          {isLoading ? (
            <>
              <div className="organization__image"></div>
              <img src={imgURL} alt="조직도" />
            </>
          ) : (
            <div>이미지 로딩 중...</div>
          )}
        </div>
      </div>
    );
  }
}

export default RS0101;
