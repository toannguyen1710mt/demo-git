import React from "react"
import Carousel from "./Carousel"
import Body from "./Body"
import Footer from "./Footer"

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Datas: props.Datas[0],
            ExtendQuote: props.Datas[2],
            QuoteDatas: props.QuoteDatas,
            FooterDatas: props.FooterDatas,
        }
    }
    render() {
        const { title, slide1, slide2, slide3, slide4, slide5, slide6, contact, backgroundSlide } = this.state.Datas;
        return (
            <div className="container-fludid">
                <Carousel backgroundSlide={backgroundSlide} title={title} slide1={slide1} slide2={slide2} slide3={slide3} slide4={slide4}
                    slide5={slide5} slide6={slide6} contact={contact} />
                <Body QuoteDatas={this.state.QuoteDatas} ExtendQuote={this.state.ExtendQuote} />
                <Footer FooterDatas={this.state.FooterDatas} />
            </div>
        )
    }
}

export default Home