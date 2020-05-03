import React from "react";

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      perPage: this.props.perPage,
      currentPage: this.props.currentPage
    };
  }

  shouldComponentUpdate = async (nextProps, nextState) => {
    if (JSON.stringify(nextProps) != JSON.stringify(this.props)) {
      await this.setState({
        data: nextProps.data,
        perPage: nextProps.perPage,
        currentPage: nextProps.currentPage
      });
      return true;
    } else return false;
  };

  render() {
    const { data, currentPage, perPage } = this.state;

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / perPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="pagination">
        <ul>
          {pageNumbers.map((number, idx) => {
            return (
              <li
                key={idx}
                className={currentPage === number ? "active" : null}
                onClick={() => {
                  this._pageClickHandler(number);
                }}
              >
                {number}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  _pageClickHandler = async number => {
    await this.setState({
      currentPage: number
    });

    const { data, currentPage, perPage } = this.state;
    const lastItem = currentPage * perPage;
    const firstItem = lastItem - perPage;

    const selectedPageList = data.slice(firstItem, lastItem);

    this.props.clickHandler(selectedPageList, currentPage);
  };
}

export default Pagination;
