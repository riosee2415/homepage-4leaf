import React from "react";
import { Switch, Link } from "react-router-dom";

class ProjectBox extends React.Component {
  render() {
    return (
      <div className="project__box" onClick={this.props.clickHandler}>
        <a
          href={this.props.link}
          target="_blank"
          onClick={event => {
            var mobileArr = new Array(
              "iPhone",
              "iPod",
              "BlackBerry",
              "Android",
              "Windows CE",
              "LG",
              "MOT",
              "SAMSUNG",
              "SonyEricsson"
            );
            for (var mobile in mobileArr) {
              if (navigator.userAgent.match(mobileArr[mobile]) != null) {
                event.preventDefault();
                break;
              }
            }
          }}
        >
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
        </a>
      </div>
    );
  }
}

export default ProjectBox;
