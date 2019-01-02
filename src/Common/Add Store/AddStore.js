import React from 'react'
import SelectBox from '../SelectBox/SelectBox'
import InputText from '../InputText/InputText'
import ButtonForm from '../Button/SubmitButton'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'

// style for formSubmit
const FormSubmit = styled.form`
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    margin: 10px 0;
    // width: 100%;
`;

// Add more information for new Store
class AddStore extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props.data;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.newStore = {
            act1: 'pen', action2: 'images',
            action3: 'exclamation', action4: 'copy', action5: 'times'
        };
        console.log('AddStore:', this.state);
    }
    handleInput = (e) => {
        this.newStore[e.target.id] = e.target.value;
        this.newStore.id = Math.floor(Math.random() * 1000) + 1;
    }
    handleSubmit = (e) => {
        e.preventDefault()
        // this.props.addNewStore(this.state);
        // this.setState({
        //     infos: [this.state.infos].concat(this.newStore)
        // });
        let oldState = JSON.parse(localStorage.getItem('newInfos'));
        if (oldState.infos) {
            oldState.infos.push(this.newStore);
            localStorage.setItem('newInfos', JSON.stringify(oldState));
        }

        console.log('safa', oldState)
        //     console.log('Submit:', this.state);
        // let oldState = JSON.parse(localStorage.getItem('toan2'));
        // if (oldState.infos) {
        //     oldState.infos.push(this.state);
        //     localStorage.setItem('toan2', JSON.stringify(oldState));
        // }
        // console.log(this.state)
    }
    render() {
        return (
            <FormSubmit className='form-horizontal' onSubmit={this.handleSubmit}>
                <InputText type='text' id='name' name='name' placeholder='Name:' label='Input Company' onChange={this.handleInput} />
                <InputText type='text' id='address' name='address' placeholder='Address:' label='Input Address' onChange={this.handleInput} />
                <SelectBox opt1='Select1' opt2='Select2'  label='Select Level' />
                <ButtonForm />
            </FormSubmit>
        )
    }
}

export default AddStore