import React from 'react'
import styled from 'styled-components'
import StyledButton from './Button-Style'

const Cancel = styled(StyledButton)`
    border: 2px solid #f44336;
    &:hover { background-color: white; color: #f44336; transition-duration: 0.4s;}
`;

class CancelButton extends React.Component {
    render() {
        return(
            <Cancel onClick={this.props.onClick} inputColor='white' inputBColor='#f44336'>{this.props.name}</Cancel>
        )
    }
}


export default CancelButton