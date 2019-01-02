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

class RightSideNav extends React.Component {
    render() {
        // let BannerRightImage = "url(\"/images/" + this.props.BannerRightImage + "\")";
        return (
            <Sidenav className="col-xs-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
                <h4>{this.props.titleRight}</h4>
                <div style={{ backgroundColor: "rgb(0, 127, 187)" }}>
                    <Note>{this.props.descriptionRight}</Note>
                </div>
                <div style={{ textAlign: "center" }}><SubLogo src={this.props.BannerRightImage} alt="Banner" /></div>
            </Sidenav>
        );
    }
}

export default RightSideNav