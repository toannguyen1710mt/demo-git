import React from 'react'
import styled from 'styled-components'

const UnorderList = styled.ul`
    width: 200px ; 
    height: 75px;
    overflow-Y: auto;
    list-style-type: none;
`;

const Item = styled.li`
    color: white;
    background-color: #333;
    &:hover { background-color: lightBlue;
        color: black;
    };
`;

class ListBox extends React.Component {
    render() {
        return (
            <UnorderList className="list-group">
               <List item1={this.props.item1} item2={this.props.item2}
                item3={this.props.item3} item4={this.props.item4}/>
            </UnorderList>
        )
    }
}

class List extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Item className="list-group-item active">{this.props.item1}</Item>
                <Item className="list-group-item">{this.props.item2}</Item>
                <Item className="list-group-item">{this.props.item3}</Item>
                <Item className="list-group-item">{this.props.item4}</Item>
            </React.Fragment>
        )
    }
}

export default ListBox