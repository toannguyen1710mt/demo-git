import React from 'react'
import styled from 'styled-components'

const Subject = styled.ul`
    display: inline-flex;
    list-style: none;
    float: right;
`

const WrapFooter = styled.div`
    color: white;
    margin: 0;
    margin-bottom: 20px;
    padding: 0;
`

const ChangePage = styled.a`
    padding: 3px 6px;
    background-color: #ebebeb;
    color: #181818;
    &:hover{ background-color:black; color: white; text-decoration: none }
    font-size: 12px;
    font-weight: bold;
    margin-right:12px;
`

class Footer extends React.Component {
    render() {
        return (
            <WrapFooter>
                <Subject>
                    <ChangePage>1</ChangePage>
                    <ChangePage>2</ChangePage>
                    <ChangePage> ... </ChangePage>
                    <ChangePage>10</ChangePage>
                    <ChangePage style={{ marginRight: "0" }}>-></ChangePage>
                </Subject>
            </WrapFooter>
        )
    }
}

export default Footer