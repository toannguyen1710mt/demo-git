import React from 'react'
import Carousel from '../../HomePage/Carousel'

class Clients extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clients: props.Datas[1]
        }
    }
    render() {
        const { title, slide1, slide2, slide3, slide4, slide5, slide6, contact } = this.state.clients;
        return(
            <Carousel title={title} slide1={slide1} slide2={slide2} slide3={slide3} slide4={slide4}
            slide5={slide5} slide6={slide6} contact={contact} />
        )
    }
}
export default Clients
