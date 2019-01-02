import React from "react"
import styled from "styled-components"

const ContentText = styled.p`
  color: white;
  font-family: sentinelBold;
  padding: 0 10px;
  text-align: left;
`;

const Note = styled(ContentText)`
  font-size: 10px;
  text-align: center;
`;

const Sidenav = styled.div`
  background-color: #f1f1f1;
  height: 100%;
`;

const SubLogo = styled.img`
  width: 116px;
  height: auto;
`;

class LeftSideNav extends React.Component {
  render() {
    return (
      <Sidenav className="col-xs-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
        <h4>{this.props.titleLeft}</h4>
        <div style={{ backgroundColor: "lightGray", textAlign: "left" }}>
          <h4 style={{ color: "#003366", fontFamily: "Hoplight, Georgial, Times New Roman,serif" }}><strong>{this.props.subTitleLeft}</strong></h4>
          <p style={{ fontSize: "10px" }}>{this.props.descriptionLeft}</p>
          <h6 style={{ color: "#003366" }}><a href="#">{this.props.diffReference}</a><span> ► </span></h6>
        </div>
        <div style={{ textAlign: "center" }}><SubLogo src={this.props.BannerLeftImage} alt="Banner" /></div>
        <h6><a style={{ color: 'red' }} href="#">Next to >></a></h6>
      </Sidenav>
    )
  }
}

export default LeftSideNav