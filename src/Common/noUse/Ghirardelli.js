import React from "react"
import styled from "styled-components"

const ContentText = styled.p`
  color: white;
  font-family: sentinelBold;
  padding: 0 10px;
`;
const Note = styled(ContentText)`
  font-size: 10px;
  text-align: center;
`;
const ContentHistory = styled(ContentText)`
  font-size: 12px;
  padding: 0;
`;

const ButtonMore = styled.button`
  background-color: rgb(0, 127, 187);
  border-radius: none;
  font-size: 12px;
  padding: 7px;
`;

const Content = styled.div`
  height: 450px;
`;

const Sidenav = styled.div`
  padding-top: 20px;
  background-color: #f1f1f1;
  height: 100%;
`;

const BannerRightbar = styled.div`
  // background-image: url('/images/GhirardelliRightbar.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100px;
`;

const MainLogo = styled(BannerRightbar)`
  // background-image: url(${props => props.GhirardelliLogo});
  height: 50px;
  width: 150px;
  margin-right: 30px;
`;
const ImageHistory = styled.img`
    width: 90%;
    height: 50px;
`;

/* On small screens, set height to 'auto' for sidenav and grid */
//   @media screen and (max-width: 767px) {
//     .sidenav {
//       height: auto;
//       padding: 15px;
//     }
//     .row.content {height:auto;}
//   }
class Ghirardelli extends React.Component {
  render() {
    return (
      <div>
        <Body />
        <Footer />
      </div>
    );
  }
}

class Body extends React.Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <Content className="row">
          <LeftSideNav />
          <MainBody />
          <RightSideNav />
        </Content>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <MainLogo style={{backgroundImage: "url('/images/GhirardelliLogo.png')"}}/>
          </div>
          <ul className="nav navbar-nav">
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Global Site</a></li>
          </ul>
          <form className="navbar-form navbar-right" action="/action_page.php">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search" name="search" />
              <div className="input-group-btn">
                <button className="btn btn-default" type="submit">
                  <i className="glyphicon glyphicon-search" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </nav>
    );
  }
}

class LeftSideNav extends React.Component {
  render() {
    return (
        <Sidenav className="col-sm-2">
            <h4>Learn About Chocolate</h4>
            <div style={{backgroundColor:"lightGray", textAlign:"left"}}>
                <h4 style={{color: "#003366",fontFamily: 'Hoplight, Georgial, Times New Roman,serif'}}>How We Make Chocolate?</h4>
                <p style={{fontSize:"10px"}}>We are one of very few American manufacturers that make chocolate starting from the cocoa bean through to finished products.</p>
                <h5 style={{color: "#003366"}}><a href="#">See the Ghiradelli Difference</a><span> ► </span></h5>
            </div> 
            <p><a href="#">Readmore >></a></p>
            <div><img style={{width: "100%",height: "100px"}} src="/images/MakeChocolate.jpg" /></div>
        </Sidenav>
    );
  }
}

class RightSideNav extends React.Component {
  render() {
    return (
      <Sidenav className="col-sm-2">
        <h3>Investors</h3>
        <div style={{ backgroundColor: "rgb(0, 127, 187)" }}>
          <Note>
            ARE YOU A BUSSINESS? <br></br>Register at Ghirardelli.com/bussinessdirect for discounted pricing.
          </Note>
        </div>
        <BannerRightbar style={{backgroundImage: "url('/images/GhirardelliRightbar.jpg')"}}/>
      </Sidenav>
    );
  }
}

class MainBody extends React.Component {
  render() {
    return (
      <div className="col-sm-8 text-left">
        <div className="row">
          <h3 style={{ color: "Green" ,textAlign:"center" }}>Ghirardelli Company</h3>
          <ContentText>Ghirardelli's legacy of creating exceptional products is the result 
            of empowering and equipping our team to take on new challenges, inspire one
            another and excel in all they do.</ContentText>
        </div>
        <h4 style={{ color: "rgb(0, 127, 187)" }}>Our History</h4>
            <History year="2003" src="/images/Ghirardelli2003.jpg"  history="Ghirardelli introduces SQUARES stand up bags."/>
            <History year="2006" src="/images/Ghirardelli2006.jpg" history="Ghirardelli introduces its first ecommerce initiative."/>
            <History year="2011" src="/images/Ghirardelli2011.jpg" history="Ghirardelli becomes the No. 2 baking brand in the U.S."/>
            <History year="2012" src="/images/Ghirardelli2012.png" history="Ghirardelli Chocolate Company celebrates its 160th anniversary."/>
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
            <div className="col-sm-10">
              <h6 style={{ color: "yellow" }}>{this.props.year}</h6>
              <ContentHistory>{this.props.history}</ContentHistory>
            </div>
            <div className="col-sm-2">
              <ImageHistory src={this.props.src} alt="history" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ghirardelli;
