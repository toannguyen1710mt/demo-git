import React from "react"
import DataOverView from "./DataOverView"
import styled from "styled-components"
import Footer from "./Footer"
import RightSideNav from "./RightBar"
import LeftSideNav from "./LeftBar"
import MainBody from "./Body"

const Content = styled.div`
  height: 450px;
`

class OverView extends React.Component {
  constructor(props){
    super(props);
    this.state={
      Datas: DataOverView
    }
  }
  render() {
    var name = this.props.match.params.OverViewName;
    var companyData = this.getData(name);

    return (
      <div>
        <Body BannerLeftImage={companyData.BannerLeftImage} descriptionLeft={companyData.descriptionLeft} subTitleLeft={companyData.subTitleLeft}
         titleLeft={companyData.titleLeft} diffReference={companyData.diffReference}
         historyImage={companyData.historyImage} historyContent={companyData.historyContent}
         mainTitle={companyData.mainTitle} bodyDescription={companyData.bodyDescription} historyTitle={companyData.historyTitle} 
         descriptionRight={companyData.descriptionRight} BannerRightImage={companyData.BannerRightImage} titleRight={companyData.titleRight} />
        <Footer LogoImage={companyData.LogoImage} link1={companyData.link1} link2={companyData.link2} link3={companyData.link3} />
      </div>
    );
  }

  getData(name) {
    var sampleData = this.state.Datas;
    var index = 0;
    if (name === 'Ghirardelli') {
      return sampleData[index];
    }
    else if (name === 'Pepsico'){
      index = 1;
      return sampleData[index];
    }
    else if(name === 'Mac') {
      index = 2;
      return sampleData[index];
    }
  }
}

class Body extends React.Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <Content className="row">
          <LeftSideNav BannerLeftImage={this.props.BannerLeftImage} descriptionLeft={this.props.descriptionLeft} subTitleLeft={this.props.subTitleLeft} 
          titleLeft={this.props.titleLeft} diffReference={this.props.diffReference} />
          <MainBody historyImage={this.props.historyImage} historyContent={this.props.historyContent}
           mainTitle={this.props.mainTitle} bodyDescription={this.props.bodyDescription} historyTitle={this.props.historyTitle} />
          <RightSideNav descriptionRight={this.props.descriptionRight} BannerRightImage={this.props.BannerRightImage} titleRight={this.props.titleRight} />
        </Content>
      </div>
    );
  }
}

export default OverView
