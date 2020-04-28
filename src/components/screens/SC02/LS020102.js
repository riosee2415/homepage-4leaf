import React from "react";
import ProjectBox from "../../ProjectBox";

const projectList = [
  {
    title: "4LEAF MANAGEMENT SYSTEM",
    desc: "사내 전산관리 시스템",
    image: "../assets/images/project_sample.png"
  },
  {
    title: "4LEAF MANAGEMENT SYSTEM",
    desc: "사내 전산관리 시스템",
    image: "../assets/images/project_sample.png"
  },
  {
    title: "4LEAF MANAGEMENT SYSTEM",
    desc: "사내 전산관리 시스템",
    image: "../assets/images/project_sample.png"
  }
];

class LS020102 extends React.Component {
  render() {
    return (
      <div className="LS020102__screen">
        <div className="title__box">
          <h2 className="title__txt">SOLUTION</h2>
          <div className="category__box">
            <ul className="category__lst">
              <li>전체</li>
              <li>WEB</li>
              <li>MOBILE</li>
            </ul>
          </div>
        </div>

        <div className="project__wrap">
          {projectList.map((project, idx) => {
            return (
              <ProjectBox
                title={project.title}
                desc={project.desc}
                image={project.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default LS020102;
