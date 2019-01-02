import React from 'react'
import NormalInputText from '../Common/InputText/NormalInputText'
import ShowButton from '../Common/Button/ShowButton'
import styled from 'styled-components'

const WrapQuoteBody = styled.div` 
    background-color: rgba(224,224,224,0.63);
    color: #626262;
    padding: 0; 
    border: 1px solid #000;
`

class Body extends React.Component {
    render() {
        const { QuoteDatas, ExtendQuote } = this.props
        const elmQuote = QuoteDatas.map((quote, index) => {
            return (
                <div style={{ padding: "0 10px 0 25px" }} key={index} className="item">
                    <h5>{quote.contentQuote}</h5>
                    <br></br>
                    <h5><strong>{quote.author}</strong></h5>
                </div>
            )
        })
        return (
            <WrapQuoteBody className="row">
                <div style={{ padding: "0 30px" }} className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <h3 style={{ color: "yellow" }}>{ExtendQuote.titleQuote}</h3>
                    <div className="row">
                        <div id="myCarousel" className="row carousel slide" data-ride="carousel" data-interval="2000">
                            <div style={{padding: " 0 15px"}} className="carousel-inner">
                                <span><img style={{ width: "4%", float: "left" }} src={ExtendQuote.imageLeftQuote} alt="qoute-left" /></span>
                                <div style={{ padding: "0 0 0 25px" }} className="item active">
                                    <h5>{ExtendQuote.contentQuoteActive}</h5>
                                    <br></br>
                                    <h5><strong>{ExtendQuote.authorActive}</strong></h5>
                                </div>
                                {elmQuote}
                                <img style={{ width: "4%", float: "right" }} src={ExtendQuote.imageRightQuote} alt="qoute-right" />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ padding: "0 20px" }} className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <h3 style={{ color: "yellow" }}>{ExtendQuote.titleContact}</h3>
                    <p>{ExtendQuote.email}</p>
                    <div className="row">
                        <div style={{ padding: "0" }} className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <NormalInputText placeholder="Name" />
                            <NormalInputText placeholder="Company" />
                            <NormalInputText placeholder="Telephone" />
                            <NormalInputText placeholder="Email" />
                        </div>
                        <div style={{ padding: "0" }} className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <div className="control-group">
                                <textarea style={{ width: "100%" }} rows="5" name="mrMessage" id="msg" class="span4" placeholder="Message" required=""></textarea>
                                <ShowButton name="Submit"></ShowButton>
                            </div>
                        </div>
                    </div>
                </div>
            </WrapQuoteBody>
        )
    }
}

export default Body