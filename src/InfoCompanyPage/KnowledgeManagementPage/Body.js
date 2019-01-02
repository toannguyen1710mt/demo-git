import React from 'react'
import styled from 'styled-components'


const Content = styled.div`
    color: white;
    border-bottom: 1px solid white;
    margin-bottom: 20px;
`

const Date = styled.ul`
    display: inline-flex;
    list-style: none;
    float: left;
    margin: 0;
    padding: 0;
`

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            KnowledgeDatas: props.KnowledgeDatas
        }
    }
    render() {
        const { KnowledgeDatas } = this.state;
        const elmKnowledge = KnowledgeDatas.map((KnowledgeData) => {
            return (
                <MainBody knowledgeImg={KnowledgeData.knowledgeImg} year={KnowledgeData.year} subject={KnowledgeData.subject}
                    title={KnowledgeData.title} author={KnowledgeData.author} content={KnowledgeData.content}
                    link={KnowledgeData.link} />
            )
        })
        return (
            <Content className="row">
                { elmKnowledge }
            </Content>
        )
    }
}

class MainBody extends React.Component {
    render() {
        return (
            
            <div>
                <div style={{ padding: "0" }} className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                    <img style={{ width: "100%" }} src={this.props.knowledgeImg} alt="Knowledgeimage" />
                </div>
                <div className="col-sm-9 col-md-9 col-lg-9 col-xl-9">
                    <Date>
                        <li style={{ marginRight: "10px" }} >{this.props.year}</li>
                        <li>{this.props.subject}</li>
                    </Date>
                    <div><h2 style={{ color: "#9a1f60" }}>{this.props.title}</h2></div>
                    <div><h5>{this.props.author}</h5></div>
                    <div style={{ marginBottom: "20px" }} ><p>{this.props.content}</p><a href="#" >{this.props.link}</a></div>
                </div>
            </div>
            
        )
    }
}

export default Body