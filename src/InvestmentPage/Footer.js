import React from 'react'
import styled from 'styled-components'
import ButtonResponsive from '../Common/Button/ButtonResponsive'

const WrapFooter = styled.div`
    background-color: white;

`
const WrapButton = styled.div`
    text-align: center;
    margin: 10px 0;
   
`

const ListLink = styled.ul`
    list-style: none;
    margin: 30px 0px;
    padding: 0;
    color: #757575;
    text-align: center;
`

const SocialLink = styled.li`
    font-size: 30px;
    margin-right: 50px;
    display: inline;
    &:hover {transition-duration: 0.4s;
            transition-timing-function: ease;
            transition-delay: 0s; 
            opacity: 0.5;}
`

const TextLink = styled(SocialLink)`
    font-size: 12px;
    font-weight: bold;
`

class Footer extends React.Component {
    render() {
        return (
            <WrapFooter style={{ marginBottom: "15px" }} className="row">
                <WrapButton>
                    <a href="#"><ButtonResponsive content="Learn more about our Investment Management solutions >" /></a>
                </WrapButton>
                <div style={{ borderTop: "1px solid #ccc" }}>
                    <ListLink>
                    <SocialLink><ion-icon name="logo-facebook"></ion-icon></SocialLink>
                    <SocialLink><ion-icon name="logo-twitter"></ion-icon></SocialLink>
                    <SocialLink><ion-icon name="logo-youtube"></ion-icon></SocialLink>
                    <SocialLink><ion-icon name="logo-instagram"></ion-icon></SocialLink>
                    <SocialLink><ion-icon name="logo-linkedin"></ion-icon></SocialLink>
                    </ListLink>
                </div>
                <div style={{ borderTop: "1px solid #ccc" }}>
                    <ListLink>
                        <TextLink> Privacy & Cookies </TextLink>
                        <TextLink> Terms of Use </TextLink>
                        <TextLink> Contact Us </TextLink>
                        <TextLink> Global Offices </TextLink>
                        <TextLink style={{ margin: "0" }}>Equal Employment Opportunity</TextLink>
                    </ListLink>
                </div>
                <div style={{ borderTop: "1px solid #ccc", textAlign: "center", padding: "20px 0" }}>
                    <p>© 2018 Morgan Stanley. All rights reserved.</p>
                </div>
            </WrapFooter>
        )
    }
}

export default Footer