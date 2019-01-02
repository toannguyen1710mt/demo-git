import React from "react"

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleNameSort = this.handleNameSort.bind(this);
  }
  handleNameSort(orderBy, orderDir) {
    this.props.handleNameSort(orderBy, orderDir)
  }
  render() {
    // perform concatenate and show name of sort method
    const { orderBy, orderDir } = this.props
    const nameSort = orderBy + '-' + orderDir

    return (
      <div style={{marginTop: '10px'}} className="col-xs-12 col-sm-12 col-md-12 col-lg-3">
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-default dropdown-toggle"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            SortBy <span className="caret" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li>
              <span onClick={() => this.handleNameSort('company', 'asc')} role="button">Name ASC</span>
            </li>
            <li>
              <span onClick={() => this.handleNameSort('company', 'desc')} role="button">Name DESC</span>
            </li>
            <li role="separator" className="divider" />
            <li>
              <span onClick={() => this.handleNameSort('level', 'asc')} role="button">Level ASC</span>
            </li>
            <li>
              <span onClick={() => this.handleNameSort('level', 'desc')} role="button">Level DESC</span>
            </li>
          </ul>
          <span style={{ padding: '10px 5px', fontSize: '12px', marginLeft: '5px'}} className="label label-success"> {nameSort} </span>
        </div>
      </div>
    );
  }
}

export default Sort;
