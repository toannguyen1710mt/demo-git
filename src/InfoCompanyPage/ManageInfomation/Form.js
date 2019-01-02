import React from 'react'
import InputText from '../../Common/InputText/InputText'
import SelectBox from '../../Common/SelectBox/SelectBox'
import SubmitButton from '../../Common/Button/SubmitButton'
import CancelButton from '../../Common/Button/CancelButton'
import styled from 'styled-components'

const Popup = styled.div`
    position: fixed;
    z-index: 999;
    padding-top: 60px; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    background-color: rgba(0,0,0,0.5);      
    display: inline;
    align-items: center;
    justify-content: center;
`;

const FormSubmit = styled.form`
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    margin: 70px 40px;
`

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            action1: 'pen',
            action2: 'times',
            action3: 'copy',
            id: '',
            company: '',
            address: '',
            level: ''
        }
        this.handleCancelForm = this.handleCancelForm.bind(this);
        this.handleInputCompany = this.handleInputCompany.bind(this);
        this.handleSubmitCompany = this.handleSubmitCompany.bind(this);
        this.handleInputLevel = this.handleInputLevel.bind(this);

    }
    handleCancelForm() {
        this.props.onClickCancel();
    }
    handleInputCompany(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleInputLevel(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentWillMount() {
        let info = this.props.infoSelected;
        if (info !== null) {
            this.setState({
                id: info.id,
                company: info.company,
                address: info.address,
                level: +info.level,
            })
        }
    }
    handleSubmitCompany(e) {
        e.preventDefault()
        this.props.handleAddCompany(this.state)
    }
    render() {
        return (
            <Popup>
                <FormSubmit action="true" className="form-horizontal">
                    <InputText type="text" name="company" value={this.state.company} onChange={this.handleInputCompany}
                        id="inputSuccess" className="form-control" placeholder="Add New Company" label="Enter new Company" />
                    <InputText type="text" name="address" value={this.state.address} onChange={this.handleInputCompany}
                        id="inputSuccess" className="form-control" placeholder="Add New Address" label="Enter new Address" />
                    <SelectBox name="level" value={this.state.level} onChange={this.handleInputLevel} label="Select Approval Level"
                        value1="0" value2="1" value3="2" opt1="Low" opt2="Avarage" opt3="High" />
                    <div className="form-group">
                        <div className=" col-sm-9 col-md-9 col-lg-9 col-sm-offset-3 col-md-offset-3 col-lg-offset-3" >
                            <SubmitButton type="button" onClick={this.handleSubmitCompany} name="Submit" />
                            <span style={{margin: '0 10px'}}></span>
                            <CancelButton type="button" onClick={this.handleCancelForm} name="Cancel" />
                        </div>
                    </div>
                </FormSubmit>
            </Popup>
        )
    }
}

export default Form
