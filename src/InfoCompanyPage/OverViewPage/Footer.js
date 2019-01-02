import React from "react"
import styled from "styled-components"

const MainLogo = styled.div`
  height: 50px;
  width: 150px;
  margin-right: 30px;
  background-repeat: no-repeat;
  background-size: 150px 50px;
  text-align: center;
`;

class Footer extends React.Component {
    render() {
        let LogoImage = "url(\"/images/" + this.props.LogoImage + "\")";
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <MainLogo style={{ backgroundImage: LogoImage }} />
                    </div>
                    <ul className="nav navbar-nav">
                        <li><a href="#">{this.props.link1}</a></li>
                        <li><a href="#">{this.props.link2}</a></li>
                        <li><a href="#">{this.props.link3}</a></li>
                    </ul>
                    <form className="navbar-form navbar-left" action="/action_page.php">
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

export default Footer