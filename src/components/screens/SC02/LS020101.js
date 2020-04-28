import React from "react";
import ProjectBox from "../../ProjectBox";

let projectList = [];

class LS020101 extends React.Component {
  constructor(props) {
    super(props);

    projectList = [
      {
        title: "4LEAF MANAGEMENT SYSTEM",
        desc: "사내 전산관리 시스템",
        image: "111",
      },
      {
        title: "4LEAF MANAGEMENT SYSTEM",
        desc: "사내 전산관리 시스템",
        image: "111",
      },
      {
        title: "4LEAF MANAGEMENT SYSTEM",
        desc: "사내 전산관리 시스템",
        image: "111",
      },
    ];
  }

  render() {
    return (
      <div className="LS020101__screen">
        <div className="title__box">
          <h2 className="title__txt">PRODUCT</h2>
          <div className="category__box">
            <ul className="category__lst">
              <li>전체</li>
              <li>홈페이지</li>
              <li>모바일 앱</li>
              <li>그룹웨어</li>
              <li>ERP</li>
            </ul>
          </div>
        </div>

        <div className="project__wrap">
          {projectList.map((project, idx) => {
            return (
              <ProjectBox
                title={project.title}
                desc={project.desc}
                loadImg={project.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default LS020101;
