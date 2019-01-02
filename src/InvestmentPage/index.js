import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

class Investment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DatasA: props.DatasA,
            DatasB: props.DatasB,
            DatasC: props.DatasC,
            DatasD: props.DatasD,
        }
    }
    render() {
        return (
            <div style={{ backgroundColor: "#f2f2f2" }} className="container-fluid">
                <Header />
                <Body DatasA={this.state.DatasA} DatasB={this.state.DatasB} DatasC={this.state.DatasC} DatasD={this.state.DatasD} />
                <Footer />
            </div>
        )
    }
}

export default Investment