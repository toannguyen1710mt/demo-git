import React from "react"
import styled from "styled-components"

const ContentText = styled.p`
  color: white;
  font-family: sentinelBold;
  padding: 0 10px;
  text-align: left;
`;

const HistoryContent = styled(ContentText)`
  font-size: 12px;
  padding: 0;
`;

const ButtonMore = styled.button`
  background-color: rgb(0, 127, 187);
  border-radius: none;
  font-size: 12px;
  padding: 7px;
  float: left;
`;

const SubLogo = styled.img`
  width: 116px;
  height: auto;
`;

class MainBody extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 ">
        <div className="row">
          <h3 style={{ color: "yellow", textAlign: "center" }}>{this.props.mainTitle}</h3>
          <ContentText>{this.props.bodyDescription}</ContentText>
        </div>
        <h4 style={{ color: "rgb(0, 127, 187)", textAlign: "left" }}>{this.props.historyTitle}</h4>
        <History historyImage={this.props.historyImage} historyContent={this.props.historyContent} />
        <div>
          <a href="#">
            <ButtonMore className="btn btn-primary">Learn More <span className="caret" /></ButtonMore>
          </a>
        </div>
      </div>
    );
  }
}

class History extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">
              <HistoryContent>{this.props.historyContent}</HistoryContent>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <SubLogo src={this.props.historyImage} alt="history" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainBody