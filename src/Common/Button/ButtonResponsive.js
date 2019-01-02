import React from 'react'
import styled from 'styled-components'
import NormalButton from './Button-Style'


const ButtonRes = styled(NormalButton)`
    width: 60%;
    padding: 14px 20px;
    margin: 20px 0;
    border: 1px solid #757575;
    color: black;
    background-color: white;
    border-radius: 10px;
    font-size: 1.2em;
    &:hover {
        background-color: gray; color: white; transition-duration: 1s
    }
`;

class ButtonResponsive extends React.Component {
    render() {
        return(
            <ButtonRes>{this.props.content}</ButtonRes>
        )
    }
}

export default ButtonResponsive