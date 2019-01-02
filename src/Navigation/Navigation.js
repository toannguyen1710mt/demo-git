import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink  } from "react-router-dom";

const NavBar = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const List = styled.li`
  background-color: none;
  margin: 15px;
`;

const ItemList = styled.div`
  color: white;
  font-size: 15px;
  text-align: content;
  display: block;
  padding: 8px 16px;
  ${List}:hover & {
    background-color: rgb(32, 135, 42);
    color: white;
  }
`;

const StyledIcon = styled.span`
  font-size: 1em;
  margin-right: 1em;
`;

class NavigationBar extends React.Component {
  render() {
    return (
      <NavBar>
        <List>
          <Link style={{textDecoration: "none"}} to="/Home">
            <ItemList>
              <StyledIcon>
                <FontAwesomeIcon icon="home" />
              </StyledIcon>
              HOME
            </ItemList>
          </Link>
        </List>
        <hr />
        <List>
          <NavLink style={{textDecoration: "none"}} to="/InvestmentManagement">
            <ItemList>
              <StyledIcon>
                <FontAwesomeIcon icon="business-time" />
              </StyledIcon>
              Investment Management
            </ItemList>
          </NavLink>
        </List>
        <List>
          <NavLink style={{textDecoration: "none"}} to="/NavbarInfo">
            <ItemList>
              <StyledIcon>
                <FontAwesomeIcon icon="clipboard" />
              </StyledIcon>
              Info Management
            </ItemList>
          </NavLink>
        </List>
        <List>
          <NavLink style={{textDecoration: "none"}} to="/Contact">
            <ItemList>
              <StyledIcon>
                <FontAwesomeIcon icon="phone" data-fa-transform="rotate-90" />
              </StyledIcon>
              Contact
            </ItemList>
          </NavLink>
        </List>
      </NavBar>
    );
  }
}

export default NavigationBar;
