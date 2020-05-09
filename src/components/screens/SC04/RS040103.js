import React from "react";
import SearchIcon from "@material-ui/icons/Search";

class RS040103 extends React.Component {
  state = {
    totalPages: [],
    currentPage: 1,
    searchBtn: "search-btn",
    isLoading: false,
    isSearchText: false,
    datas: [],
  };

  componentDidMount = async () => {
    const dataPage = 1;
    let tempArr = [];

    for (let i = 1; i <= dataPage; i++) {
      tempArr.push(i);
    }

    this.setState({
      totalPages: tempArr,
    });
  };

  render() {
    const {
      totalPages,
      currentPage,
      searchBtn,
      isSearchText,
      isLoading,
    } = this.state;

    return (
      <div className="RS040103__screen">
        <div className="RS040103__screen__box">
          <div className="rsb__contain">
            <ul>
              <li>🍀 포립 소프트웨어를 사용해주셔서 감사합니다.</li>
              <li>🍀 필요한 자료를 무료로 다운받아 사용하세요.</li>
            </ul>
          </div>
          <div className="table-search">
            <input
              type="text"
              placeholder="제목으로 검색하세요"
              className={isSearchText ? "search-text click" : "search-text"}
            />
            <div className={searchBtn} onClick={() => this._ClickSearch()}>
              <SearchIcon />
            </div>
          </div>
          <div className="rsb__contain-table">
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
                {isLoading ? (
                  <>
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
                  </>
                ) : (
                  <tr>
                    <td colSpan="5">조회된 데이터가 없습니다.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="rsb__contain">
            <div className="pagenation">
              <div className="page-pre">-</div>
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
              <div className="page-next">+</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _getData = async () => {
    this.setState({
      isLoading: true,
    });
  };

  _ClickSearch = () => {
    this.setState({
      isSearchText: !this.state.isSearchText,
    });
  };
}

export default RS040103;
