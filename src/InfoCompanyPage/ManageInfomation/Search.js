import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
    }
    this.handleInputSearch = this.handleInputSearch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }
  handleSearch() {
    this.props.handleSearch(this.state.filterText);
  }
  handleClear() {
    this.setState({
      filterText: ''
    });
    this.props.handleSearch('');
  }
  handleInputSearch(e) {
    this.setState({
      filterText: [e.target.value]
    })
  }
  render() {
    return (
      <div style={{marginTop: '10px', padding:'0px'}} className="col-xs-12 col-sm-12 col-md-12 col-lg-3">
        <div className="input-group mb-3">
          <input type="text" onChange={this.handleInputSearch} className="form-control" placeholder="Company/Address" />
          <span className="input-group-btn">
            <button onClick={this.handleSearch} className="btn btn-success" type="submit">
              <span className="glyphicon glyphicon-search"></span>
            </button>
            <button onClick={this.handleClear} className="btn btn-danger" type="submit">
              <span className="glyphicon glyphicon-remove"></span>
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default Search;
