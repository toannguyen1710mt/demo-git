import React from 'react'
import styled from 'styled-components'
import MACHolidayParty from '../../../images/MACHolidayParty.jpg'
import MACHolidayPack from '../../../images/MACHolidayPack.jpg'
import MACBackground from '../../../images/MACBackground.jpg'




const Introduce = styled.p`
    color: white;
    font-family: roboto-mono_bold,Helvetica,Arial,sans-serif;
`
const Note = styled(Introduce)`
    font-size: 10px;
    text-align: center;
`

/* Set height of the grid so .sidenav can be 100% (adjust as needed) */
const Content = styled.div`
    height: 450px
`

/* Set gray background color and 100% height */
const Sidenav = styled.div` 
    padding-top: 20px;
    background-color: #f1f1f1;
    height: 100%;
    textAlign: left;
    font-family: roboto-mono_regular,Helvetica,Arial,sans-serif;
`

const HolidayParty = styled.div`
    background-image: url(${MACHolidayParty});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100px;
`

// const MediumLogo = styled(Logo)`
//     background-image: url(${});
//     height: 120px;
// `
// const MainLogo = styled(Logo)`
//     background-image: url(${});
//     height:50px;
//     width: 200px;
// `

/* On small screens, set height to 'auto' for sidenav and grid */
//   @media screen and (max-width: 767px) {
//     .sidenav {
//       height: auto;
//       padding: 15px;
//     }
//     .row.content {height:auto;} 
//   }
class MAC extends React.Component {
  render() {
    return (
      <div>
        <Body />
        <Footer />
      </div>
    )
  }
}

class Body extends React.Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <Content className="row">
          <LeftSideNav />
          <div className="col-sm-8 text-left">
            <h2 style={{ color: 'Violet', textAlign: "center" }}>MAC Cosmetic Company</h2>
            <div>
              <h3 style={{ color: 'white' }} >What Makes up M·A·C</h3>
              <Introduce><strong>M·A·C</strong> is the world’s leading professional makeup authority because
               of our unrivalled expertise in makeup <strong>ARTISTRY.</strong></Introduce>
              <Introduce><strong>M·A·C</strong> is at the forefront of fashion <strong>TRENDSETTING</strong>, collaborating with leading talents from fashion, art and popular
                culture. Our Artists create trends backstage at fashion weeks around the world.</Introduce>
              <Introduce><a style={{ color: "red" }} href="#">Readmore >></a></Introduce>
            </div>
            <hr></hr>
            <h3 style={{ color: 'rgb(0, 127, 187)' }}>Our History -> Birth of a Cult: From Wow to Now!</h3>
            <Introduce>All Ages, All Races, All Genders… A professional makeup brand setting
              trends backstage at fashion weeks around the world. Today, M·A·C means so many
              things to its millions of fans in every corner of the planet, but a global beauty
              phenomenon has to begin somewhere.</Introduce>
            <Introduce><a style={{ color: "red" }} href="#">Readmore >></a></Introduce>
          </div>
          <RightSideNav />
        </Content>
      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            {/* <MainLogo></MainLogo> */}
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Global Site</a></li>
          </ul>
          <form className="navbar-form navbar-right" action="/action_page.php">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search" name="search" />
              <div className="input-group-btn">
                <button className="btn btn-default" type="submit">
                  <i className="glyphicon glyphicon-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </nav>
    )
  }
}

class LeftSideNav extends React.Component {
  render() {
    return (
      <Sidenav className="col-sm-2">
        <h5 style={{textAlign: 'left'}}>Holiday<br></br>collections</h5>
        <HolidayParty>
          <p style={{ fontSize: "9px" }}>For two days only, take 50% off our limited-edition 
          Fix+ Party Pack / Shiny Pretty Things. Yours for only $12 ($36 Value)! Plus, free shipping
           and gift wrap on all orders. No code needed. Discount applied in cart.SHOP NOW</p>
          <h5 style={{ color: "#003366" }}><a href="#">See the Ghiradelli Difference</a><span> ► </span></h5>
        </HolidayParty>
        <p><a href="#">Readmore >></a></p>
        {/* <div><img style={{width: "100%",height: "100px"}} src={MakeChocolate} /></div> */}
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
        {/* <Logo /> */}
      </Sidenav>
    );
  }
}

export default MAC