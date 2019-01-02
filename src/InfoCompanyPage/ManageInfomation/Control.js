import React from 'react'
import Search from './Search'
import Sort from './Sort'

class Control extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleAdd() {
        this.props.onClickAdd()
    }
    render() {
        // creat button toggle Form
        const isShowForm = this.props.isShowForm;
        let CloseButtonForm = <button onClick={this.handleAdd} className="btn btn-danger btn-block">Close Form</button>
        if(!isShowForm) {
            CloseButtonForm = <button onClick={this.handleAdd} className="btn btn-info btn-block">Add Store</button>
        }

        // get props order sort from infoPage component
        const {orderBy, orderDir} = this.props
        
        return (
            <div className='row'>
                <Search handleSearch={this.props.handleGetSearchText}/>
                <Sort orderBy={orderBy} orderDir={orderDir} handleNameSort= {this.props.handleNameSort}/>
                <div style={{marginTop: '10px', padding:'0px'}} className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                    {CloseButtonForm}
                </div>
            </div>
        )
    }
}

export default Control