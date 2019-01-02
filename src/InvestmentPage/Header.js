import React from 'react'
import styled from 'styled-components'

const WrapHeader = styled.div`
    background-color: #0f8ec7;
    color: white;
    text-align: center;
    font-family: ms_gloriola_ii_displaythin,sans-serif;
    margin-bottom: 15px;
`

class Header extends React.Component {
    render() {
        return (
            <WrapHeader className="row">
                <h1 style={{ fontSize: "43px", padding: "30px 100px 0 100px" }}>Investment Management</h1>
                <p style={{  padding: "0 200px 30px 200px"}}>Morgan Stanley strives to provide outstanding long-term investment performance,
                service and a comprehensive suite of investment management solutions to a diverse
                client base, which includes governments, institutions, corporations, and individuals
                worldwide. </p>
            </WrapHeader>
        )
    }
}

export default Header