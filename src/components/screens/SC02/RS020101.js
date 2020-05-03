import React from "react";
import ProjectBox from "../../ProjectBox";

const categoryList = ["전체", "홈페이지", "모바일 앱", "그룹웨어", "ERP"];

const projectList = [
  {
    category: "그룹웨어",
    title: "4LEAF MANAGEMENT SYSTEM",
    desc: "사내 전산관리 시스템",
    image: "111"
  },
  {
    category: "그룹웨어",
    title: "4LEAF MANAGEMENT SYSTEM",
    desc: "사내 전산관리 시스템",
    image: "111"
  },
  {
    category: "그룹웨어",
    title: "4LEAF MANAGEMENT SYSTEM",
    desc: "사내 전산관리 시스템",
    image: "111"
  },
  {
    category: "그룹웨어",
    title: "4LEAF MANAGEMENT SYSTEM",
    desc: "사내 전산관리 시스템",
    image: "111"
  },
  {
    category: "그룹웨어",
    title: "4LEAF MANAGEMENT SYSTEM",
    desc: "사내 전산관리 시스템",
    image: "111"
  },
  {
    category: "그룹웨어",
    title: "4LEAF MANAGEMENT SYSTEM",
    desc: "사내 전산관리 시스템",
    image: "111"
  }
];

class RS020101 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: 0,
      selectedList: projectList
    };
  }

  render() {
    const { selectedCategory, selectedList } = this.state;

    return (
      <div className="RS020101__screen">
        <div className="title__box">
          <h2 className="title__txt">PRODUCT</h2>
        </div>
        <div className="category__box">
          <ul className="category__lst">
            {categoryList.map((category, idx) => {
              return (
                <li
                  className={selectedCategory == idx ? "active" : null}
                  onClick={() => this._categoryClickHandler(idx)}
                >
                  {category}
                </li>
              );
            })}
          </ul>
        </div>

        {selectedList.length > 0 ? (
          <div className="project__wrap">
            {selectedList.map((project, idx) => {
              return (
                <ProjectBox
                  key={idx}
                  category={project.category}
                  title={project.title}
                  desc={project.desc}
                  image={project.image}
                  clickHandler={() => this._projectClickHandler(idx)}
                />
              );
            })}
          </div>
        ) : (
          <div className="empty__box">해당하는 제품이 없습니다.</div>
        )}
      </div>
    );
  }

  _categoryClickHandler = idx => {
    const category = categoryList[idx];
    let selectedList = [];

    if (category === "전체") {
      selectedList = projectList;
    } else {
      projectList.map(project => {
        if (project.category === category) selectedList.push(project);
      });
    }
    this.setState({
      selectedCategory: idx,
      selectedList: selectedList
    });
  };

  _projectClickHandler = idx => {};
}

export default RS020101;
