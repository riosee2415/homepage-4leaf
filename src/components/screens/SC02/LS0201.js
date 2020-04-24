import React from "react";
import SubMenu from "../../SubMenu";

const menuList = [
  {
    title: "제품",
    desc: "4LEAF에서 제작한 홈페이지, 어플리케이션이 궁금하신가요?",
    detailDesc:
      "4LEAF만의 개발 노하우와 합리적인 제작비용으로 최적의 서비스를 제공해드립니다.",
    link: "software/product"
  },
  {
    title: "솔루션",
    desc: "4LEAF에서 자체 제작한 솔루션을 이용해보고 싶으신가요?",
    detailDesc: "저렴한 비용으로 최상의 퀄리티로 제작된 솔루션을 경험해보세요.",
    link: "software/solution"
  }
];

class LS0201 extends React.Component {
  render() {
    return (
      <div className="LS0201__screen">
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

export default LS0201;
