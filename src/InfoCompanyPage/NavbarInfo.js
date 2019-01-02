import React from 'react'
import ManageInfo from '../InfoCompanyPage/ManageInfomation/index'
import OverView from './OverViewPage/index'
import Clients from './ClientPage/Clients'
import Knowledge from './KnowledgeManagementPage/index'
import { BrowserRouter, Link, Route } from 'react-router-dom'

class NavbarInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <BrowserRouter>
                <div className="Container">
                    <div className="row">
                        <nav style={{ marginBottom: "0" }} className="navbar navbar-inverse">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <Link to="/NavbarInfo/Clients" className="navbar-brand">Clients</Link>
                                </div>
                                <div className="collapse navbar-collapse" id="myNavbar">
                                    <ul className="nav navbar-nav">
                                        <li className="active"><Link to="/NavbarInfo/ManageInformation">Manage Information</Link></li>
                                        <li><Link to="/NavbarInfo/Knowledge">Knowledge Management</Link></li>
                                        <li className="dropdown">
                                            <Link data-toggle="dropdown" to="/NavbarInfo/OverView">
                                                OverView<span className="caret"></span>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li><Link to="/NavbarInfo/OverView/Pepsico">PepsiCo Inc</Link></li>
                                                <li><Link to="/NavbarInfo/OverView/Mac">MAC Cosmetic Company</Link></li>
                                                <li><Link to="/NavbarInfo/OverView/Ghirardelli">Ghirardelli Chocolate Company</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><Link to="/NavbarInfo/Clients"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="row">
                        <Route path="/NavbarInfo/Clients" component={() => <Clients Datas={this.props.Datas} />} />
                        <Route path="/NavbarInfo/ManageInformation" component={() => <ManageInfo infos={this.props.infos} />} />
                        <Route path="/NavbarInfo/Knowledge" component={() => <Knowledge KnowledgeDatas={this.props.KnowledgeDatas} />} />
                        <Route path="/NavbarInfo/OverView/:OverViewName" component={OverView} />
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default NavbarInfo