import React from "react";
import IconButton from './IconButton'

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { company, address, icon1, icon2, icon3, level, id, info, handleDelete, handleEdditCompany, foundationDate, OverView } = this.props;
        let elmLevel = <span>{level}</span>
        if (level === 0) { elmLevel = <span className="label label-default">Low</span> }
        else if (level === 1) {
            elmLevel = <span className="label label-warning">Average</span>
        } else if (level === 2) {
            elmLevel = <span className="label label-info">High</span>
        }
        return (
            <tr>
                <td className="text-center">{address}</td>
                <td className="text-center">{company}</td>
                <td className="text-center">{elmLevel}</td>
                <td className="text-center">
                    <IconButton icon1={icon1} icon2={icon2} icon3={icon3} id={id}
                        handleDelete={handleDelete}
                        handleEdditCompany={handleEdditCompany} info={info}
                        foundationDate={foundationDate}
                        OverView={OverView} />
                </td>
            </tr>
        )
    }
}

export default Item;
