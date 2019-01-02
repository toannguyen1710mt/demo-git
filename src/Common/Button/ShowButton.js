import React from 'react'
import NormalButton from './Button-Style'
import styled from 'styled-components'


const Show = styled(NormalButton)`
    border: 2px solid #008CBA;
    &:hover { background-color: white; color: #008CBA; transition-duration: 0.4s;}
`

class ShowButton extends React.Component {
    render() {
        return(
            <Show onClick={this.props.onClick} inputBColor="#008CBA" >{this.props.name}</Show>
        )
    }
}

export default ShowButton