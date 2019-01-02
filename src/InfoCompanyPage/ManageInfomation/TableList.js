import React from "react"
import Item from "./Item"

class TableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {infos, handleDelete, handleEdditCompany} = this.props;
    const elmInfos = infos.map((info, index) => {
      return(
        <Item key={index} company={info.company} address={info.address} 
        icon1={info.action1} icon2={info.action2} icon3={info.action3} level={info.level} 
        id={info.id} handleDelete={handleDelete} OverView={info.OverView}
        handleEdditCompany={handleEdditCompany} info={info} />
      )
    })
    return (
      <div className="row">
        <div  className="panel panel-success">
          <div style = {{fontSize: '20px', fontWeight: 'bold'}} className="panel-heading">Company Management List  </div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th style={{ width: "30%" }} className="text-center">
                  Address
              </th>
                <th className="text-center">Company</th>
                <th style={{ width: "20%" }} className="text-center">
                  Approval-Level
              </th>
                <th style={{ width: "20%" }} className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
             {elmInfos}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default TableList;
