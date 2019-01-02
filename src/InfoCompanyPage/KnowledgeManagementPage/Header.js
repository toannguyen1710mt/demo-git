import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
library.add(faBriefcase)

const WrapHeader = styled.div`
    font-family: 'Hoplight, Georgial, Times New Roman,serif';
    color: white;
    border-bottom: 1px solid white;
    margin-bottom: 20px;
`

const PageList = styled.div`
    float: right;
    margin-bottom: 10px;
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

class Header extends React.Component {
    render() {
        return (
            <WrapHeader className="row" >
                <h2>Management <span><FontAwesomeIcon icon="briefcase" /></span></h2>
                <div>
                    <p>New research on management from Harvard Business School faculty on issues including management strategy, accountability, design and succession planning</p>
                </div>
                <PageList>
                    <p>Page 1 of <strong>100</strong> Results<span></span> <ChangePage href="#" >></ChangePage></p>
                </PageList>
            </WrapHeader>
        )
    }
}

export default Header