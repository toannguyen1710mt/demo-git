import React from 'react'
import styled from 'styled-components'

const CBInput = styled.input`
  position: relative;
  height: 25px;
  width: 25px;
  background-color: #eee;`;

const InputSubmit = styled.input`
color: ${props => props.inputColor || "white"};
background-color:  ${props => props.inputBColor || "#555555"}; 
border: 2px solid #555555;
border-radius: 5px;
padding: 10px 25px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;
&:hover { background-color: white; color: #555555; transition-duration: 0.4s;}
`

class CheckBox extends React.Component{
    render() {
        return(
            <form action="/action_page.php">
                <Box  checked='checked' content1={this.props.content1}
                 content2={this.props.content2}/>
                <InputSubmit type="submit" value="Submit" />
            </form>
        )
    }
}

class Box extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CBInput type="checkbox" name1={this.props.name1} value1={this.props.value1} checked='checked' />{this.props.content1}
                <CBInput type="checkbox" name2={this.props.name2} value2={this.props.value2} />{this.props.content2}
            </React.Fragment>
        )
    }
}

export default CheckBox