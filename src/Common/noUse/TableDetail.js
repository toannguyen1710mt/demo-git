import React from "react"
import Item from "./Item"

class DetailCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infos: props.infos,
    };
  }
  render() {
    const { infos } = this.state;
    const elmInfos = infos.map((info, index) => {
      return (
        <Item key={index} company={info.company} address={info.address}
          level={info.field} foundationDate={info.foundationDate} />
      )
    })
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="panel panel-success">
            <div style={{ fontSize: '20px', fontWeight: 'bold' }} className="panel-heading">Detail of Company </div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th style={{ width: "30%" }} className="text-center">
                    Address
              </th>
                  <th className="text-center">Company</th>
                  <th style={{ width: "20%" }} className="text-center">
                    Field
              </th>
                  <th style={{ width: "20%" }} className="text-center">Foundation-Date</th>
                </tr>
              </thead>
              <tbody>
                {elmInfos}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default DetailCompany;
