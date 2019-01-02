import React from 'react'
// import styled from 'styled-components'

// const SelectItem = styled.select`
//     width: 100%;
//     padding: 12px 20px;
//     margin: 8px 0;
//     display: inline-block;
//     border: 1px solid #ccc;
//     border-radius: 4px;
//     box-sizing: border-box;
// `;

class SelectBox extends React.Component {
    render() {
        return (
            <div className="form-group has-success">
                <label htmlFor="Select" className="col-sm-3 col-md-3 col-lg-3 control-label">{this.props.label}</label>
                <div class="col-sm-9 col-md-9 col-lg-9">
                    <select id="Select" name={this.props.name} className="form-control" onChange={this.props.onChange}>
                        <option value={this.props.value1}>{this.props.opt1}</option>
                        <option value={this.props.value2}>{this.props.opt2}</option>
                        <option value={this.props.value3}>{this.props.opt3}</option>
                        <option value={this.props.value4}>{this.props.opt4}</option>
                        <option value={this.props.value5}>{this.props.opt5}</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default SelectBox

