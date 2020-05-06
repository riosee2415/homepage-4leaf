/*global kakao*/
import React from "react";

class RS010104 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    var options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(36.351046, 127.371009), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 마커가 표시될 위치입니다
    var markerPosition = new kakao.maps.LatLng(36.351046, 127.371009);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  }

  render() {
    return (
      <div className="RS010104__screen">
        <div className="RS010104__content">
          <div className="RS010104__mainTitle">#오시는 길</div>
          <div className="mapWrap">
            <div id="map" className="businessAddress"></div>
            <div>🚩대전광역시 서구 계룡로394번길 14-14</div>
          </div>
        </div>
      </div>
    );
  }
}

export default RS010104;
