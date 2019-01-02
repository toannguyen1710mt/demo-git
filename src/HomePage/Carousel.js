import React from 'react'
import styled from 'styled-components'

const WrapCarousel = styled.div`
    margin-bottom: 50px;
`

const WrapButton = styled.div`
    position: relative;
`

const Contact = styled.button`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

class Carousel extends React.Component {
    render() {
        return (
            <WrapCarousel className="row">
                <div style={{ padding: '0'}} className="container-fluid">
                    <h2 style={{ color: 'yellow', textAlign: 'center' }} >{this.props.title}</h2>
                    <div style={{margin: "0"}} id="myCarousel" className="row carousel slide" data-ride="carousel" data-interval="2000" >
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                            <li data-target="#myCarousel" data-slide-to="3"></li>
                            <li data-target="#myCarousel" data-slide-to="4"></li>
                            <li data-target="#myCarousel" data-slide-to="5"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="item active">
                                <img src={this.props.slide1} alt="Chicago" style={{ width: '100%', height: '450px' }} />
                            </div>
                            <div className="item">
                                <img src={this.props.slide2} alt="New York" style={{ width: '100%', height: '450px' }} />
                            </div>
                            <div className="item">
                                <img src={this.props.slide3} alt="Washington" style={{ width: '100%', height: '450px' }} />
                            </div>
                            <div className="item">
                                <img src={this.props.slide4} alt="california" style={{ width: '100%', height: '450px' }} />
                            </div>
                            <div className="item">
                                <img src={this.props.slide5} alt="ohio" style={{ width: '100%', height: '450px' }} />
                            </div>
                            <div className="item">
                                <img src={this.props.slide6} alt="texas" style={{ width: '100%', height: '450px' }} />
                            </div>
                        </div>
                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <WrapButton className="row">
                    <Contact type="button" className="btn btn-primary">
                        <span className="glyphicon glyphicon-phone"></span>  {this.props.contact} 
                    </Contact>
                </WrapButton>
            </WrapCarousel>
        )
    }
}


export default Carousel