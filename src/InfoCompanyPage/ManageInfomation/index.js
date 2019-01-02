import React from 'react'
import Title from './Title'
import Control from './Control'
import Form from './Form'
import TableList from './TableList'
import { orderBy as funcOrder, remove } from 'lodash';
const uuidv4 = require('uuid/v4');

class InfoCompanyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infos: props.infos,
            isShowForm: false,
            filterText: '',
            orderBy: 'Company',
            orderDir: 'ASC',
            infoSelected: null
        }
        this.handleToggleForm = this.handleToggleForm.bind(this);
        this.handleGetSearchText = this.handleGetSearchText.bind(this);
        this.handleNameSort = this.handleNameSort.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddCompany = this.handleAddCompany.bind(this);
        this.handleEdditCompany = this.handleEdditCompany.bind(this);
    }
    //Create Form popup 
    handleToggleForm() {
        this.setState({
            isShowForm: !this.state.isShowForm,
            infoSelected: null
        })
    }
    //Creat function search string
    handleGetSearchText(value){
        this.setState({
            filterText: value
        })
    }
    //create function sort of string
    handleNameSort(orderBy, orderDir) {
        this.setState({
            orderBy: orderBy,
            orderDir: orderDir
        })
    }
    //create function delete any item
    handleDelete(id) { 
        // let infoAfterDel = this.state.infos.filter((info)=>{
        //     return info.id !== id
        // })

        // create delete method used by lodash application
        let infoAfterDel = this.state.infos
        infoAfterDel = remove(infoAfterDel, function (info) {
            return info.id !== id;
        });
        this.setState({
            infos: infoAfterDel
        })
    }
    //create function add new item and eddit item 
    handleAddCompany(newCompany) {
        let {infos} = this.state
        if(newCompany.id !== '') {
            infos.forEach((currentVal, index)=> {
                if(currentVal.id === newCompany.id){
                    infos[index].company = newCompany.company;
                    infos[index].address = newCompany.address;
                    infos[index].level =  +newCompany.level;
                }
            })
            this.setState({
                infos: infos,
                isShowForm: false
            })
        }
        else {
            // newCompany.id = uuidv4();
            // let newInfos = [...this.state.infos, newCompany];
            // this.setState({
            //     infos: newInfos,
            //     isShowForm: false
            // })
            infos.push({
                id: uuidv4(),
                company: newCompany.company,
                address: newCompany.address,
                level:  +newCompany.level,
                action1: newCompany.action1,
                action2: newCompany.action2,
                action3: newCompany.action3,
            })
            this.setState({
                infos: infos,
                isShowForm: false
            })
        }
    }
    //create function get info which to eddit and pass to form
    handleEdditCompany(infoSelected) {
        this.setState({
            infoSelected: infoSelected,
            isShowForm: true
        })
    }
    render() {
        // Declare statement of toggle Form
        let isShowForm = this.state.isShowForm;
        let elmForm = null;
        if(isShowForm) {
          elmForm = <Form onClickCancel={this.handleToggleForm} 
                          handleAddCompany={this.handleAddCompany}
                          infoSelected={this.state.infoSelected} />
        }

        // Declare info list to filter/search
        let {filterText, infos} = this.state;
        let filterInfos = []
            infos.forEach((info) => {
             if (info.company.toLowerCase().indexOf(filterText) !== -1 || info.address.toLowerCase().indexOf(filterText) !== -1) {
                filterInfos.push(info)
           }
        })

        // Declare name of sort method
        let {orderBy, orderDir } = this.state;
        filterInfos = funcOrder(filterInfos, [orderBy], [orderDir]);

        return (
            <div className="container-fluid">
                <Title />
                <Control 
                    onClickAdd={this.handleToggleForm} 
                    isShowForm={isShowForm}
                    handleGetSearchText={this.handleGetSearchText}
                    orderBy={ orderBy} orderDir={orderDir} handleNameSort={this.handleNameSort} />
                    <br></br>
                    {elmForm}
                    <br></br>
                <TableList infos={filterInfos} 
                    handleDelete={this.handleDelete} 
                    handleEdditCompany={this.handleEdditCompany} />
            </div>
        )
    }
}

export default InfoCompanyPage