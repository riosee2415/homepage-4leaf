import React from "react";

class ProjectBox extends React.Component {
  render() {
    return (
      <div className="project__box" onClick={this.props.clickHandler}>
        <div className="project__img">
          <img src={this.props.image} alt="프로젝트 사진" />
        </div>
        <div className="project__txt">
          <h2 className="project-title">{this.props.title}</h2>
          <p className="project-desc">
            <span>({this.props.category})</span>
            {this.props.desc}
          </p>
        </div>
      </div>
    );
  }
}

export default ProjectBox;
