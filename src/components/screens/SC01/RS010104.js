/*global kakao*/
import React from "react";

class RS010104 extends React.Component {
  componentDidMount() {
    console.log("Hello");
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=70acf84d208bec8ced7252c1a13960b9";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        let options = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new kakao.maps.LatLng(36.351046, 127.371009), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };

        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
      });
    };
  }

  render() {
    return (
      <div className="RS010104__screen">
        <div className="RS010104__content">
          <div className="RS010104__mainTitle">#오시는 길</div>
          <div id="map" className="businessAddress"></div>
          호출해야하는 것을 fetch로 받아서 불러오기
        </div>
      </div>
    );
  }
}

export default RS010104;
