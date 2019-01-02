import React from 'react'
import StyledButton from './Button-Style'

class SubmitButton extends React.Component {
    render() {
        return(
            <StyledButton onClick={this.props.onClick} inputColor='white'>{this.props.name}</StyledButton>
        )
    }
}

export default SubmitButton