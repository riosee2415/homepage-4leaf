import React from "react";
import ProjectBox from "../../ProjectBox";

let projectList = [];

class RS020101 extends React.Component {
  constructor(props) {
    super(props);

    projectList = [
      {
        title: "4LEAF MANAGEMENT SYSTEM",
        desc: "사내 전산관리 시스템",
        image: "111"
      },
      {
        title: "4LEAF MANAGEMENT SYSTEM",
        desc: "사내 전산관리 시스템",
        image: "111"
      },
      {
        title: "4LEAF MANAGEMENT SYSTEM",
        desc: "사내 전산관리 시스템",
        image: "111"
      }
    ];
  }

  render() {
    return (
      <div className="RS020101__screen">
        <div className="title__box">
          <h2 className="title__txt">SOLUTION</h2>
        </div>
        <div className="category__box">
          <ul className="category__lst">
            <li class="active">전체</li>
            <li>WEB</li>
            <li>MOBILE</li>
          </ul>
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

export default RS020101;
