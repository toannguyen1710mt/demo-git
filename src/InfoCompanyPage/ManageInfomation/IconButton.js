import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledIcon = styled.span`
    font-size: 1em;
    margin-right: 1em;
    color: purple;
    &:hover{color: SlateBlue;}
`;

const StyledIconSpec = styled(StyledIcon)`
    color: red;
    &:hover{color: black;}
`;

class IconButton extends React.Component {
    constructor(props) {
        super(props);
        this.onClickDelete = this.onClickDelete.bind(this);
        this.onClickEddit = this.onClickEddit.bind(this);
    }
    onClickDelete = (id) => {
        // var id = this.props.id
        this.props.handleDelete(id)
    }
    onClickEddit = (info) => {
        this.props.handleEdditCompany(info)
        // console.log('tt', eddit)
    }
    render() {
        const { icon1, icon2, icon3, foundationDate, OverView } = this.props;
        let Action = <span>{foundationDate}</span>;
        let linkStr = "/NavbarInfo/OverView/" + OverView;
        
        if (icon1 && icon2 && icon3 !== null) {
            Action = 
            <React.Fragment>
                <StyledIcon onClick={() => this.onClickEddit(this.props.info)} >
                    <FontAwesomeIcon icon={icon1} />
                </StyledIcon>
                <StyledIcon style={{color:'purple'}}>
                    <Link to={linkStr}><FontAwesomeIcon icon={icon3} /></Link>
                </StyledIcon>
                <StyledIconSpec onClick={() => this.onClickDelete(this.props.id)}>
                    <FontAwesomeIcon icon={icon2} />
                </StyledIconSpec>
            </React.Fragment>
        }
        return (
            <div>
                {Action}
            </div>

        )
    }
}

export default IconButton
