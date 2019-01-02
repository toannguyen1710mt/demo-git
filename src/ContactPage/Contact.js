import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faPhone, faNewspaper, faRss, faAngleRight } from '@fortawesome/free-solid-svg-icons'
library.add(faEnvelope, faPhone, faNewspaper, faRss, faAngleRight)

const ContactFooter = styled.div`
    list-style: none;
    font-family: Titillium Web,sans-serif;
    background-color: white;
`
const Title = styled.h3`
    color: #000;
    margin: 10px 0 12px 0;
    padding-bottom: 12px;
    font-weight: 600;
    border-bottom: 1px solid rgb(128, 128, 128);
`
const SubTitle = styled.h5`
    color: #000;
    margin: 10px 0 0 0;
    padding-bottom: 12px;
    font-weight: 600;
`

const StyledIcon = styled.span`
    color: #fd9733;
    margin-right: 10px;
`
const AddressList = styled.ul`
    padding: 0;
    margin: 0;
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgb(128, 128, 128);
    list-style: none;
`
const ItemList = styled.li`
    display: inline-block;
    margin: 0 5px;
    margin-left: 0;
    color: #4d4d4d;
    font-weight: 300;
`
const SubItemList = styled(ItemList)`
    display: block;
`

const ItemLink = styled.a`
    color: gray;
    &:hover { color: #000};
    font-size: 10px;
`

const Media = styled.div`
    float: right;
    width: 47%;
    margin-right: 3%;
`

const ContactIntro = styled.p`
    color: #fd9733;
    margin-bottom: 10px;
    font-weight: 300;
`
const InputContact = styled.input`
    background: #4d4d4d none repeat scroll 0 0;
    border: none;
    border-radius: 5px;
    color: #ccc;
    padding: 5px 12px;
    margin: 0 0 10px;
    margin-right: 1.75%;
    width: 49%;
    float: left;
`
const TextAreaInput = styled.textarea`
    background: #4d4d4d none repeat scroll 0 0;
    border: none;
    border-radius: 5px;
    color: #ccc;
    padding: 5px 12px;
    margin: 0 0 10px;
    min-height: 100px;
    width: 100%;
    resize: vertical;
`

const WrapRow = styled.div`
    margin: 0;
`

class Contact extends React.Component {
    render() {
        return (
            <ContactFooter data-spy="scroll" data-offset="200" className="container-fluid">
                <WrapRow className="row">
                    <Title><StyledIcon><FontAwesomeIcon icon="envelope" /></StyledIcon>Contact Us</Title>
                </WrapRow>
                <WrapRow className="row">
                    <AddressList>
                        <ItemList><span style={{ color: "#000" }}>Genacom</span>, Inc. | </ItemList>
                        <ItemList> 4225 Solano Ave #558 | </ItemList>
                        <ItemList>Napa, CA 94558</ItemList>
                        <ItemList> <StyledIcon><FontAwesomeIcon icon="phone" /></StyledIcon><span style={{ color: "#000" }}>(707) 226-7000</span></ItemList>
                    </AddressList>
                </WrapRow>
                <WrapRow className="row">
                    <ContactIntro>Let us know how we can best help you meet your online business needs, and we will contact you to learn the details.</ContactIntro>
                </WrapRow>
                <WrapRow className="row">
                    <form action="true" >
                        <InputContact type="text" placeholder="First Name" ></InputContact>
                        <InputContact style={{ marginRight: '0' }} type="text" placeholder="Last Name"></InputContact>
                        <InputContact type="text" placeholder="Email Address" ></InputContact>
                        <InputContact style={{ marginRight: '0' }} type="text" placeholder="Company Name"></InputContact>
                        <InputContact type="text" placeholder="Phone Number" ></InputContact>
                        <InputContact style={{ marginRight: '0' }} type="text" placeholder="Website"></InputContact>
                        <TextAreaInput placeholder="Project Details"></TextAreaInput>
                        <button className="btn btn-primary">Send</button>
                    </form>
                </WrapRow>
                <WrapRow className="row">
                    <Title><StyledIcon><FontAwesomeIcon icon="newspaper" /></StyledIcon>Article</Title>
                </WrapRow>
                <WrapRow className="row">
                    <Article subTitle="eBusiness" businessLink1="Upgrade your Online Business" businessLink2="Avoid Website and Server Failures" businessLink3="Protecting Your Online Data And Reputation"
                             subTitle2="Social Media" mediaLink1="Social and Viral Marketing" mediaLink2="Facebook tops Google Traffic and Keeps Growing" mediaLink3="5 Reasons to take Social Media Marketing Seriously" />
                    <Article subTitle="Website Management" businessLink1="Every Website has its Unique Problems" businessLink2="Prevent the Embarrassment of Downtime" businessLink3="Complete Data, Version, and Configuration Backup"
                             subTitle2="Internet Marketing" mediaLink1="Presentation is Everything and Content is King" mediaLink2="Traditional Marketing is Fading Fast" />
                </WrapRow>
                <WrapRow className="row">
                    <WrapRow>
                        <img src="/images/LogoContact.png" alt="Logo contact" ></img>
                    </WrapRow>
                    <span >©2000-2018 Genacom, inc. All Rights Reserved.</span> 
                </WrapRow>
            </ContactFooter>
        )
    }
}

class Article extends React.Component {
    render() {
        return (
            <WrapRow style={{ padding: '0', margin: '0' }} className="row">
                <Media>
                    <SubTitle><StyledIcon><FontAwesomeIcon icon="rss" /></StyledIcon>{this.props.subTitle}</SubTitle>
                    <AddressList style={{ border: 'none' }}>
                        <SubItemList><ItemLink href="#">{this.props.businessLink1}</ItemLink></SubItemList>
                        <SubItemList><ItemLink href="#">{this.props.businessLink2}</ItemLink></SubItemList>
                        <SubItemList><ItemLink href="#">{this.props.businessLink3}</ItemLink></SubItemList>
                        <SubItemList><ItemLink style={{ fontSize: "14px" }} href="#">MORE </ItemLink><StyledIcon><FontAwesomeIcon icon="angle-right" /></StyledIcon></SubItemList>
                    </AddressList>
                </Media>
                <Media>
                    <SubTitle><StyledIcon><FontAwesomeIcon icon="rss" /></StyledIcon>{this.props.subTitle2}</SubTitle>
                    <AddressList style={{ border: 'none' }}>
                        <SubItemList><ItemLink href="#">{this.props.mediaLink1}</ItemLink></SubItemList>
                        <SubItemList><ItemLink href="#">{this.props.mediaLink2}</ItemLink></SubItemList>
                        <SubItemList><ItemLink href="#">{this.props.mediaLink3}</ItemLink></SubItemList>
                        <SubItemList><ItemLink style={{ fontSize: "14px" }} href="#">MORE </ItemLink><StyledIcon><FontAwesomeIcon icon="angle-right" /></StyledIcon></SubItemList>
                    </AddressList>
                </Media>
            </WrapRow>
        )
    }
}

export default Contact 