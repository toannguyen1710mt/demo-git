import React from 'react'
import styled from 'styled-components'

const TitlePage = styled.div`
    color: white;
    background-color: #4CAF50;
    width: 80%;
    text-align: center;
`

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='row'>
                <TitlePage>
                    <h1>Information Table Of Companies</h1>
                </TitlePage>
            </div>
        )
    }
}

export default Title