import React from "react";
import ProjectBox from "../../ProjectBox";
import Pagination from "../../Pagination";

const categoryList = ["전체", "홈페이지", "모바일 앱", "그룹웨어", "ERP"];

const projectList = [
  {
    category: "그룹웨어",
    title: "4LEAF MANAGEMENT SYSTEM",
    desc: "사내 전산관리 시스템",
    image: "111",
    link: "http://www.naver.com",
  },
  {
    category: "모바일 앱",
    title: "4LEAF MANAGEMENT SYSTEM",
    desc: "사내 전산관리 시스템",
    image: "111",
    link: "http://www.naver.com",
  },
  {
    category: "그룹웨어",
    title: "4LEAF MANAGEMENT SYSTEM",
    desc: "사내 전산관리 시스템",
    image: "111",
    link: "http://www.naver.com",
  },
  {
    category: "모바일 앱",
    title: "4LEAF MANAGEMENT SYSTEM",
    desc: "사내 전산관리 시스템",
    image: "111",
    link: "http://www.naver.com",
  },
  {
    category: "ERP",
    title: "4LEAF MANAGEMENT SYSTEM",
    desc: "사내 전산관리 시스템",
    image: "111",
    link: "http://www.naver.com",
  },
  {
    category: "그룹웨어",
    title: "4LEAF MANAGEMENT SYSTEM",
    desc: "사내 전산관리 시스템",
    image: "111",
    link: "http://www.naver.com",
  },
];

class RS020101 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      perPage: 6,
      selectedCategory: 0,
      selectedCategoryList: projectList,
      selectedPageList: projectList.slice(0, 6),
    };
  }

  render() {
    const {
      selectedCategory,
      selectedCategoryList,
      selectedPageList,
      currentPage,
      perPage,
    } = this.state;

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

        {selectedPageList.length > 0 ? (
          <>
            <div className="project__wrap">
              {selectedPageList.map((project, idx) => {
                return (
                  <ProjectBox
                    key={idx}
                    category={project.category}
                    title={project.title}
                    desc={project.desc}
                    image={project.image}
                    link={project.link}
                  />
                );
              })}
            </div>

            <Pagination
              data={selectedCategoryList}
              currentPage={currentPage}
              perPage={perPage}
              clickHandler={(selectedPageList, currentPage) => {
                this.setState({
                  selectedPageList: selectedPageList,
                  currentPage: currentPage,
                });
              }}
            />
          </>
        ) : (
          <div className="empty__box">해당하는 제품이 없습니다.</div>
        )}
      </div>
    );
  }

  _categoryClickHandler = (idx) => {
    const category = categoryList[idx];
    let selectedCategoryList = [];

    if (category === "전체") {
      selectedCategoryList = projectList;
    } else {
      projectList.map((project) => {
        if (project.category === category) selectedCategoryList.push(project);
      });
    }

    const { perPage } = this.state;

    this.setState({
      currentPage: 1,
      selectedCategory: idx,
      selectedCategoryList: selectedCategoryList,
      selectedPageList: selectedCategoryList.slice(0, perPage),
    });
  };
}

export default RS020101;
