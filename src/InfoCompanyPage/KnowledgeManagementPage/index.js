import React from 'react'
import Header from "./Header"
import Body from './Body';
import Footer from "./Footer"


class Knowledge extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            KnowledgeDatas: props.KnowledgeDatas
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <Body KnowledgeDatas={this.state.KnowledgeDatas}/>
                <Footer />
            </div>
        )
    }
}

export default Knowledge