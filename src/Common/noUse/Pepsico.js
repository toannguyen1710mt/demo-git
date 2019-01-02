import React from 'react'
import styled from 'styled-components'

const Introduce = styled.p`
    color: white;
    font-family: sentinelBold;
`
const Note = styled(Introduce)`
    font-size: 10px;
    text-align: center;
`

const ButtonMore = styled.button`
    background-color: rgb(0, 127, 187);
    border-radius: none;
    font-size: 15px;
    padding: 10px;
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
`

const Logo = styled.div`
    background-image: url('/images/pepsiLogo.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100px;
`
const MediumLogo = styled(Logo)`
    background-image: url('/images/Investors.jpg');
    height: 120px;
`
const MainLogo = styled(Logo)`
    background-image: url('/images/pepsiLogoMain.png');
    height:50px;
    width: 200px;
`

/* On small screens, set height to 'auto' for sidenav and grid */
//   @media screen and (max-width: 767px) {
//     .sidenav {
//       height: auto;
//       padding: 15px;
//     }
//     .row.content {height:auto;} 
//   }
class Pepsico extends React.Component {
    render() {
        return (
            <div>
                {/* <h1 style={{ color: 'yellow' }}>{this.props.match.params.PrivateName}</h1> */}
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
                    <Sidenav className="col-sm-2">
                        <h3>Investors</h3>
                        <MediumLogo></MediumLogo>
                        <h5>2018 Annual Report</h5>
                        <h6>With a portfolio of iconic, beloved and locally relevant brands, we're delivering results today and confidently preparing for the future.</h6>
                        <p><a href="#">Readmore >></a></p>
                    </Sidenav>
                    <div className="col-sm-8 text-left">
                        <h1 style={{ color: 'yellow' }}>PepsiCo Company</h1>
                        <Introduce>We have a complementary food and beverage portfolio that includes
                         22 brands that in 2017 each generated more than $1 billion in estimated annual retail sales.</Introduce>
                        <hr></hr>
                        <h3 style={{ color: 'rgb(0, 127, 187)' }}>Our History</h3>
                        <Introduce>PepsiCo began in 1965 with the merger of Pepsi-Cola and Frito-Lay.
                             Today, it's a global food and beverage leader. Discover many of the most
                         significant moments in the story of PepsiCo.</Introduce>
                        <div>
                            <a href="#">
                                <ButtonMore className="btn btn-primary">
                                    Learn More <span className="caret"></span>
                                </ButtonMore>
                            </a>
                        </div>
                    </div>
                    <Sidenav className="col-sm-2">
                        <div style={{ backgroundColor: 'rgb(0, 127, 187)' }}>
                            <Note>DID YOU KNOW? Pepsi-Cola brands include Pepsi, Mountain Dew,
                                 Lemon Lemon, Bubly, AMP Energy Organics, IZZE, Naked Juice, Propel,
                             Mug, and Aquafina, among others</Note>
                        </div>
                        <Logo></Logo>
                    </Sidenav>
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
                        <MainLogo></MainLogo>
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

export default Pepsico

