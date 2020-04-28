import React from "react";

class ProjectBox extends React.Component {
  render() {
    return (
      <div className="project__box">
        <div className="project__img">
          <img src={this.props.loadImg} alt="프로젝트 사진" />
        </div>
        <div className="project__txt">
          <h2 className="project-title">{this.props.title}</h2>
          <p className="project-desc">{this.props.desc}</p>
        </div>
      </div>
    );
  }
}

export default ProjectBox;
