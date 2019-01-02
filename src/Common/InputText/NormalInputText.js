import React from 'react'

class NormalInputText extends React.Component {
    render() {
        return (
            <div className="form-group has-success ">
                <div style={{marginBottom: "5px"}} className="col-sm-12 col-md-12 col-lg-12">
                    <input type={this.props.type} id={this.props.id} placeholder={this.props.placeholder}
                        value={this.props.value} name={this.props.name} onChange={this.props.onChange} className="form-control" />
                </div>
            </div>
        )
    }
}

export default NormalInputText