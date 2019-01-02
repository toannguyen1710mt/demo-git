import React from 'react'
import styled from 'styled-components'

const WrappedRowBody = styled.div`
    margin-bottom: 15px;
`

const WrappedNewsBox = styled.div`
    padding: 25px;
    background-color: white;
`
const WrappedNewsBox2 = styled.div`
    padding: 25px;
    width: 60%;
`

const WrappedMainContent = styled.div`
    padding-top: 10%;
    padding-right:5%;
`

const TitleBox = styled.span`
    font-size: 0.625em;
    margin: 10px 0;
    font-weight: bold;
    color: #0f8ec7;
    text-transform: uppercase;
`

const TitleContent = styled.h3`
    color: #333;
    font-size: 1.2em;
    line-height: 1;
    text-transform: uppercase;
`

const TitleContent2 = styled(TitleContent)`
    color: white;
    font-size: 2em;
`

const DateBox = styled.span`
    color: #999;
    font-size: 1em;
    padding-top: .4375em;
`

const ContentBox = styled.p`
    padding-top: 1.875em;
    font-size: 1em;
    color: #4c4c4c;
`

const BackgroundImage = styled.div`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-clip: content-box;
    height: 680px;
`

const WrappedImage = styled.div`
    & {
        position: relative;
    }
    &:after {
        border-bottom: 15px solid transparent;
        border-top: 15px solid transparent;
        border-right: 15px solid #fff;
        content: "";
        height: 0;
        position: absolute;
        right: -1px;
        top: 25px;
        width: 0;
    }
`

class Body extends React.Component {
    render() {
        const { DatasA, DatasB, DatasC, DatasD } = this.props;
        const elmBodyRow1 = DatasA.map((data, idx) => {
            return (
                <div key={idx} style={{ marginBottom: "20px" }}>
                    <NewsBox titleBox={data.titleBox} contentBox={data.contentBox} dateBox={data.dateBox}
                        titleContent={data.titleContent} />
                </div>
            )
        })
        const elmBodyRow2 = DatasB.map((data, index) => {
            if (index % 2 === 0) {
                return (
                    <div key={index} style={{ display: "inline-flex" }} className="col-xs-12 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                        <WrappedImage>
                            <img style={{ width: "100%", height: "100%" }} src={data.imgBox} alt="Investment" />
                        </WrappedImage>
                        <div style={{ width: "59%" }} >
                            <NewsBox titleBox={data.titleBox} contentBox={data.contentBox} dateBox={data.dateBox}
                                titleContent={data.titleContent} />
                        </div>
                    </div>
                )
            }
            else if (index % 2 !== 0) {
                return (
                    <div key={index} className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4" >
                        <NewsBox titleBox={data.titleBox} contentBox={data.contentBox} dateBox={data.dateBox}
                            titleContent={data.titleContent} />
                    </div>
                )
            }
        })
        const elmBodyRow3 = DatasC.map((data, index) => {
            if (index % 2 === 0) {
                return (
                    <div key={index} className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4" >
                        <NewsBox titleBox={data.titleBox} contentBox={data.contentBox} dateBox={data.dateBox}
                            titleContent={data.titleContent} />
                    </div>
                )
            }
            else if (index % 2 !== 0) {
                return (
                    <div key={index} style={{ display: "inline-flex" }} className="col-xs-12 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                        <WrappedImage>
                            <img style={{ width: "100%", height: "100%" }} src={data.imgBox} alt="Investment" />
                        </WrappedImage>
                        <div style={{ width: "59%" }}>
                            <NewsBox titleBox={data.titleBox} contentBox={data.contentBox} dateBox={data.dateBox}
                                titleContent={data.titleContent} />
                        </div>
                    </div>
                )
            }
        })
        let BackgroundNewsBox = "url('" + DatasD[0].backgroundNewsBox + "')";
        return (
            <div className="row">
                <WrappedRowBody className="row">
                    <BackgroundImage style={{ backgroundImage: BackgroundNewsBox }} className="col-xs-12 col-sm-8 col-md-8 col-lg-8 col-xl-8" >
                        <NewsBox2 titleBox={DatasD[0].titleBox} contentBox={DatasD[0].contentBox}
                            titleContent={DatasD[0].titleContent} dateBox={DatasD[0].dateBox} />
                    </BackgroundImage>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4" >
                        {elmBodyRow1}
                    </div>
                </WrappedRowBody>
                <WrappedRowBody style={{ marginBottom: "35px" }} className="row">
                    {elmBodyRow2}
                </WrappedRowBody>
                <WrappedRowBody style={{ marginBottom: "35px" }} className="row">
                    {elmBodyRow3}
                </WrappedRowBody>
            </div>
        )
    }
}

class NewsBox extends React.Component {
    render() {
        return (
            <WrappedNewsBox>
                <TitleBox>
                    {this.props.titleBox}
                </TitleBox>
                <WrappedMainContent>
                    <TitleContent>{this.props.titleContent}</TitleContent>
                    <DateBox>{this.props.dateBox}</DateBox>
                    <ContentBox>{this.props.contentBox}</ContentBox>
                </WrappedMainContent>
            </WrappedNewsBox>
        )
    }
}

class NewsBox2 extends React.Component {
    render() {
        return (
            <WrappedNewsBox2>
                <TitleBox style={{ color: "white" }}>
                    {this.props.titleBox}
                </TitleBox>
                <WrappedMainContent>
                    <TitleContent2>{this.props.titleContent}</TitleContent2>
                    <DateBox style={{ color: "white" }}>{this.props.dateBox}</DateBox>
                    <ContentBox style={{ color: "white" }}>{this.props.contentBox}</ContentBox>
                </WrappedMainContent>
            </WrappedNewsBox2>
        )
    }
}

export default Body