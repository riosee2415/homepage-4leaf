import React from "react";
import SubMenu from "../../SubMenu";

const menuList = [
  {
    title: "온라인 문의",
    desc: "궁굼한 내용을 문의하세요.",
    detailDesc:
      "홈페이지 제작, 어플리케이션 개발 등 4LEAF에게 궁굼하신 사항이 있으신가요?",
    link: "/support/online",
  },
  {
    title: "견적 문의",
    desc: "상세 견적을 문의하세요.",
    detailDesc:
      "개발하고싶은 소프트웨어가 있으신가요? 4LEAF이 파트너가 되어드립니다.",
    link: "/support/estimate",
  },
  {
    title: "자료실",
    desc: "필요한 자료들이 있습니다.",
    detailDesc:
      "사용 메뉴얼, 템플릿 오픈소스 등 4LEAF의 다양한 자료들을 활용하세요.",
    link: "/support/online",
  },
];

class LS0401 extends React.Component {
  render() {
    return (
      <div className="LS0401__screen">
        {menuList.map((menu, idx) => {
          return (
            <SubMenu
              key={idx}
              title={menu.title}
              desc={menu.desc}
              detailDesc={menu.detailDesc}
              link={menu.link}
            />
          );
        })}
      </div>
    );
  }
}

export default LS0401;
