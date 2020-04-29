import React from "react";
import imageURL from "../../../assets/images/organization/organization.png";

class RS010103 extends React.Component {
  state = {
    imgURL: this.props.imageURL,
    isLoading: false,
  };

  componentDidMount = async () => {
    await this.setState({
      imgURL: imageURL,
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
              <img className="organization__image" src="" alt="조직도" />
            </>
          ) : (
            <div>이미지 로딩 중...</div>
          )}
        </div>
      </div>
    );
  }
}

export default RS010103;
