import React from "react";

class RS040103 extends React.Component {
  state = {
    totalPages: [],
    currentPage: 1,
  };

  componentDidMount = async () => {
    const dataPage = 5;
    let tempArr = [];

    for (let i = 1; i <= dataPage; i++) {
      tempArr.push(i);
    }

    this.setState({
      totalPages: tempArr,
    });

    console.log(this.state.totalPages);
  };

  render() {
    const { totalPages, currentPage } = this.state;

    return (
      <div className="RS040103__screen">
        <div className="RS040103__screen__box">
          <div className="rsb__contain">
            <ul>
              <li>🍀 포립 소프트웨어를 사용해주셔서 감사합니다.</li>
              <li>🍀 필요한 자료를 무료로 다운받아 사용하세요.</li>
            </ul>
          </div>

          <div className="rsb__contain">
            <table className="docsTable">
              <thead>
                <tr>
                  <th>NO</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일</th>
                  <th>조회수</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>DUMMYDUMMYDUMMYDUMMY</td>
                  <td>DUMMY</td>
                  <td>DUMMY</td>
                  <td>DUMMY</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>DUMMYDUMMYDUMMYDUMMY</td>
                  <td>DUMMY</td>
                  <td>DUMMY</td>
                  <td>DUMMY</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>DUMMYDUMMYDUMMYDUMMY</td>
                  <td>DUMMY</td>
                  <td>DUMMY</td>
                  <td>DUMMY</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rsb__contain">
            {totalPages.map((page, idx) => {
              return (
                <div
                  key={idx}
                  className={
                    page === currentPage ? "selectedPage" : "noneSelectedPage"
                  }
                >
                  {page}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default RS040103;
