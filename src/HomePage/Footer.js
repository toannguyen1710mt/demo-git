import React from "react"
import SelectBoxNoneLabel from '../Common/SelectBox/SelectBoxNoneLabel'
import styled from "styled-components"

const ContactList = styled.ul`
    float: left;
    list-style: none;
    padding-left: 15px;
    margin-right: 30px;
`
const SocialLink = styled.li`
    font-size: 25px;
    margin-right: 15px;
    display: inline;
`

const WrapFooter = styled.div`
    background-color: #000; 
    padding: 0;
    border: 2px solid #292929;
    color: white;
`

class Footer extends React.Component {
    render() {
        const { FooterDatas } = this.props;
        const elmList = FooterDatas.map((list) => {
            return (
                <ContactList>
                    <li>{list.contactLink1}</li>
                    <li>{list.contactLink2}</li>
                    <li>{list.contactLink3}</li>
                    <li>{list.contactLink4}</li>
                    <li>{list.contactLink5}</li>
                    <li>{list.contactLink6}</li>
                </ContactList>
            )
        })
        return (
            <WrapFooter className="row">
                <div style={{ borderRight: "1px solid #292929" }} className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                    <h4>Company</h4>
                    {elmList}
                </div>
                <div style={{ borderRight: "1px solid #292929" }} className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                    <h4 style={{marginBottom:"20px"}}>Regional Websites</h4>
                    <SelectBoxNoneLabel opt1="Global English" opt2="América Latina (Spanish)" opt3="Australia (English)" opt4="Brazil (Português)"
                        opt5="Denmark (norsk)" />
                    <h4 style={{marginTop:"20px"}}>Newsletter</h4>
                    <p style={{marginTop: "20px"}}>Subscribe To Monthly Newsletter</p>
                    <form className="form-inline">
                        <div className="input-group">
                            <input class="form-control" id="focusedInput" type="text" placeholder="Email:" />
                            <div className="input-group-btn">
                            <button  className="btn btn-success" type="submit">
                                Send <i className="glyphicon glyphicon-send" />
                            </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                <h4 style={{marginBottom:"20px"}}>Follow Us:</h4>
                <ContactList>
                    <SocialLink><ion-icon name="logo-facebook"></ion-icon></SocialLink>
                    <SocialLink><ion-icon name="logo-twitter"></ion-icon></SocialLink>
                    <SocialLink><ion-icon name="logo-youtube"></ion-icon></SocialLink>
                    <SocialLink><ion-icon name="logo-linkedin"></ion-icon></SocialLink>
                    <SocialLink><ion-icon name="logo-instagram"></ion-icon></SocialLink>
                </ContactList>
                <h4 style={{marginTop: "20px"}} >ManageEngine is a division of <img src="/images/ZohoGroup.png" alt="logo" /> Corp.</h4>
                </div>
            </WrapFooter>
        )
    }
}

export default Footer