import React from 'react'
// import styled from 'styled-components'

// const Input = styled.input`
//     width: 100%;
//     padding: 12px 20px;
//     margin: 8px 0;
//     display: inline;
//     border: 1px solid #ccc;
//     border-radius: 4px;
//     box-sizing: border-box;
// `;

class InputText extends React.Component {
    render() {
        return (
            <div class="form-group has-success ">
                <label className="col-sm-3 col-md-3 col-lg-3 control-label" htmlFor={this.props.id}>{this.props.label}</label>
                <div className="col-sm-9 col-md-9 col-lg-9">
                    <input type={this.props.type} id={this.props.id} placeholder={this.props.placeholder}
                        value={this.props.value} name={this.props.name} onChange={this.props.onChange} className="form-control" />
                    <span style={{right:'15px'}} className="glyphicon glyphicon-ok form-control-feedback "></span>
                </div>
            </div>
        )
    }
}

export default InputText