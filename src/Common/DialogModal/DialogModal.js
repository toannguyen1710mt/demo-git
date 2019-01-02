import React from 'react'
import styled from 'styled-components'
import ShowButton from '../Button/ShowButton'


const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 0px;
    transform: translateY(-50%);
    background-color: transparent;
    color: white;
    border: none;
    font-size: 3em;
    cursor: pointer;
    padding: 0px 15px;
    &:hover { color: black; background-color: lightGray;}
`;

const CloseBox = styled.div` 
    position: fixed;
    z-index: 999;
    padding-top: 50px; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    background-color: rgba(0,0,0,0.5);      
    display: inline;
    align-items: center;
    justify-content: center;
    // box-shadow: 10px 10px darkolivegreen;
`;

const ContentBox = styled.div`
    background-color: #3cb371;
    margin: auto;
    padding: 10px;
    border: 1px solid #888;
    width: 80%;
    text-align: center;
`;

const ContentDialog = styled.p`
    color: white;
    font-size: 40px;
    margin: 5px;
    // text-shadow: 3px 3px;
`;

class CloseModal extends React.Component {
    render() {
        return (
            <CloseBox>
                <ContentBox>
                    <CloseButton onClick={this.props.onclose}>&times;</CloseButton>
                    <ContentDialog>{this.props.content}</ContentDialog>
                </ContentBox>
            </CloseBox>
        )
    }
}

class DialogModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Modal: false
        }
        this.ShowModal = this.ShowModal.bind(this);
    }
    // ShowModal = (e) => {
    //     e.target.id.showModal();
    // }
    ShowModal = () => {
        if (this.state.Modal) {
            return (
                <CloseModal onclose={() => this.setState({ Modal: false })} content={this.props.content} />
            )
        }
        return null;
    }
    render() {
        return (
            <div>
                <ShowButton inputColor='white' inputBColor='#008CBA' onClick={() => this.setState({ Modal: true })} >{this.props.show}</ShowButton>
                {this.ShowModal()}
            </div>
        )
    }
}

export default DialogModal