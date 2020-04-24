import React from "react";
import SubMenu from "../../SubMenu";

const menuList = [
  {
    title: "제품",
    desc: "",
    detailDesc: ""
  },
  {
    title: "솔루션",
    desc: "",
    detailDesc: ""
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
            />
          );
        })}
      </div>
    );
  }
}

export default LS0201;
