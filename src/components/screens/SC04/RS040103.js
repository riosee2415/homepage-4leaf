import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class RS040103 extends React.Component {
  state = {
    totalPages: [],
    currentPage: 1,
    searchBtn: "search-btn",
    isLoading: false,
    isSearchText: false,
    datas: [],
    isAdminCheckDialog: false,
    adminCode: "",
    isInputDialog: false,
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
      isAdminCheckDialog,
      isInputDialog,
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

            <div className="docsAddArea">
              <div onClick={() => this._openAdminDialog()}>
                <ControlPointIcon style={{ fontSize: 30 }} />
              </div>
            </div>
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

        <Dialog
          open={isAdminCheckDialog}
          onClose={this._openAdminDialog}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">관리자 코드 입력</DialogTitle>
          <DialogContent>
            <DialogContentText>
              자료등록을 위해선 관리자 권한이 필요합니다. 관리자 코드를
              입력해주세요.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              name="adminCode"
              label="ADMIN CODE"
              type="password"
              onChange={this._handleChangeValue}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this._openAdminDialog} color="primary">
              취소
            </Button>
            <Button onClick={() => this._checkAdminDialog()} color="primary">
              입력
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={isInputDialog}
          onClose={this._openInputDialog}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">자료 업로드</DialogTitle>
          <DialogContent>
            <DialogContentText>
              사용자들을 위한 자료를 업로드하는 공간 입니다.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              name="docsTitle"
              label="Title"
              type="text"
              onChange={this._handleChangeValue}
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              name="docsContent"
              label="Content"
              type="text"
              onChange={this._handleChangeValue}
              multiline={true}
              rows={10}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this._openInputDialog} color="primary">
              닫기
            </Button>
            <Button onClick={this._openInputDialog} color="primary">
              작성완료
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  _handleChangeValue = (event) => {
    let nextState = {};
    nextState[event.target.name] = event.target.value;
    this.setState(nextState);
  };

  _checkAdminDialog = () => {
    const { adminCode } = this.state;
    let flag = false;

    if (adminCode === process.env.ADMIN_CODE) {
      flag = true;
    }

    if (flag) {
      this.setState({
        isInputDialog: !this.state.isInputDialog,
      });
    } else {
    }

    this.setState({
      isAdminCheckDialog: !this.state.isAdminCheckDialog,
    });
  };

  _openInputDialog = () => {
    this.setState({
      isInputDialog: !this.state.isInputDialog,
    });
  };

  _openAdminDialog = () => {
    this.setState({
      isAdminCheckDialog: !this.state.isAdminCheckDialog,
    });
  };

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
