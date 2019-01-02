import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NestRouter from './NestRouter';
import AddStore from '../Add Store/AddStore'
// import AddStore from '../Add Store/AddStore'


// Style for Table
const TableCell = styled.td`
    // border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    color: black;
`;

const Title = styled(TableCell)`
    color: white;
    margin: 8px;
    font-size: 1.2em;
`;

const TableHead = styled.th`
    font-weight: bold;
    font-size: 17px;
    color: #4CAF50;
    text-align: left;
    padding: 8px;
    border-bottom: 2px solid rgb(240, 240, 240);
    background-color: #dddddd;
`;

const EmptyHead = styled(TableHead)`
    height: 40px;
`;

const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f2f2f2;
    }
`;

const TitleTable = styled(TableRow)`
    position: absolute;
    z-index: 1;
    background-color: #4CAF50;
    margin: -10px 10px 10px 10px;
    width: 100%;
`;

const Table = styled.table`
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    margin: 20px 0 10px 0;
    position: relative;
    background-color: hsla(150, 100%, 90%, 0.3);
`;

const StyledIcon = styled.span`
    font-size: 1em;
    margin-right: 1em;
    color: purple;
    &:hover{color: SlateBlue;}
`;

const StyledIconSpec = styled(StyledIcon)`
    color: red;
    &:hover{color: white;}
`
// Create icon for table
class IconFont extends React.Component {
    constructor(props) {
        super(props);
        this.onClickClose = this.onClickClose.bind(this);
    }
    onClickClose = () => {
        var id = parseInt(this.props.id)
        this.props.delStore(id)
    }
    render() {
        return (
            <React.Fragment>
                <StyledIcon>
                    <FontAwesomeIcon icon={this.props.icon1} />
                </StyledIcon>
                <StyledIcon>
                    <FontAwesomeIcon icon={this.props.icon2} />
                </StyledIcon>
                <StyledIcon>
                    <FontAwesomeIcon icon={this.props.icon3} />
                </StyledIcon>
                <StyledIcon>
                <Link to="/nestedRouter/contact">
                    <FontAwesomeIcon icon={this.props.icon4} /></Link>
                    <Route path="/nestedRouter/contact" component={Contact} />
                </StyledIcon>
                <StyledIconSpec onClick={this.onClickClose}>
                    <FontAwesomeIcon icon={this.props.icon5} />
                </StyledIconSpec>
            </React.Fragment>
        )
    }
}

// Create New Table
class TableForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.data
    }
    deleteStore = (id) => {
        const filterInfos = this.state.infos.filter((info) => {
            return info.id !== id
        })
        this.setState({
            infos: filterInfos
        })
    }
    render() {
        const infos = this.state.infos
        const row = infos.map((info, index) => {
            return (
                <TableRow key={index}>
                    <TableCell>{info.name}</TableCell>
                    <TableCell>{info.address}</TableCell>
                    <TableCell>
                        <IconFont icon1={info.action1} icon2={info.action2}
                            icon3={info.action3} icon4={info.action4} icon5={info.action5}
                            id={info.id} delStore={this.deleteStore} />
                    </TableCell>
                </TableRow>
            )
        });
        return (
            <div>
                <Table>
                    <thead>
                        <TitleTable><Title>Store Management</Title></TitleTable>
                        <TableRow>
                            <EmptyHead></EmptyHead>
                            <EmptyHead></EmptyHead>
                            <EmptyHead></EmptyHead>
                        </TableRow>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Address</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </thead>
                    <tbody>
                        {row}
                    </tbody>
                </Table>
            </div>
        )
    }
}

class Contact extends React.Component {
    render() {
        return (
            <div><h1 style={{ color: 'yellow', backgroundColor: 'black' }}>My address</h1></div>
        )
    }
}

class TestRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <Link to="/nestedRouter" class="navbar-brand">WebSiteName</Link>
                        </div>
                        <ul class="nav navbar-nav">
                            {/* <li class="active"><Link to="#">Home</Link></li> */}
                            {/* <li><Link to="/Add New Store">Pixa Animal</Link></li> */}
                            <li><Link to="/nestedRouter/city">Pixa Pet</Link></li>
                            <li><Link to="/nestedRouter/big">Big animal</Link></li>
                            <li><Link to="/nestedRouter/contact">Contact</Link></li>
                            <li><Link to="/nestedRouter/table">Table</Link></li>
                        </ul>
                    </div>
                    <Route path="/nestedRouter/:nestedRouterName" component={NestRouter} />
                    {/* <Route path="/Add New Store" component={AddStore} /> */}
                    <Route path="/nestedRouter/contact" component={Contact} />
                    <Route path="/nestedRouter/table" component={() => <TableForm data={this.props.data} />} />
                </nav>
            </BrowserRouter>
        )
    }
}


// const Image = (props) => (
//     <div>{props.match.params.nestedRouterName ?
//         <div>
//             <image
//                 src={ 'http://lorempixel.com/400/200/' + props.match.params.nestedRouterName + '/1'} />
//         </div> : null}
//        <h1>{props.match.params.nestedRouterName}</h1>
//     </div>
// )


// const TableForm = ({ infos, deleteStore }) => {
//     const row = [];
//     infos.forEach((info) => {
//         row.push(
//             <TableRow key={info.id}>
//                 <TableCell>{info.name}</TableCell>
//                 <TableCell>{info.address}</TableCell>
//                 <TableCell>
//                     <IconFont icon1={info.action1} icon2={info.action2}
//                         icon3={info.action3} icon4={info.action4} icon5={info.action5}
//                         id={info.id} delStore={deleteStore} />
//                 </TableCell>
//             </TableRow>
//         )
//     })
//     return (
//         <div>
//             <Table>
//                 <thead>
//                     <TitleTable><Title>Store Management</Title></TitleTable>
//                     <TableRow>
//                         <EmptyHead></EmptyHead>
//                         <EmptyHead></EmptyHead>
//                         <EmptyHead></EmptyHead>
//                     </TableRow>
//                     <TableRow>
//                         <TableHead>Name</TableHead>
//                         <TableHead>Address</TableHead>
//                         <TableHead>Actions</TableHead>
//                     </TableRow>
//                 </thead>
//                 <tbody>
//                     {row}
//                 </tbody>
//             </Table>
//         </div>
//     )
// }


// Render new Table
// class ManageInfomation extends React.Component {
//     constructor(props) {
//         super(props);
//         // let oldState = localStorage.getItem('toan2');
//         // if (!oldState) {

//         this.state = this.props.data;
//         console.log('AAAAAA:', this.state);
//         // console.log('ManageInfomations:', this.state);
//         // } else {
//         //     console.log('oldState:', oldState);
//         //     this.state = JSON.parse(oldState);
//         // }
//         // localStorage.setItem('toan2', JSON.stringify(this.state));

//     }

//     deleteStore = (id) => {
//         console.log('tee', id);
//         let filterInfos = this.state.infos.filter((info) => {
//             return info.id !== id
//         })
//         this.setState({
//             infos: filterInfos
//         })
//         console.log(this.state)
//     }
//     // addNewStore = (newStore) => {
//     //     newStore.id = this.state.infos.length + 1
//     //     const newInfos = [...this.state.infos, newStore]
//     //     this.setState({
//     //         infos: newInfos
//     //     })
//     //     console.log(this.state)
//     // }
//     render() {
//         return (
//             <div>
//                 <TableForm infos={this.state.infos} deleteStore={this.deleteStore} />
//                 {/* {React.cloneElement(this.props.children, { infos: this.state.infos, addNewStore: this.addNewStore })} */}
//                 {/* <AddStore addNewStore={this.addNewStore} /> */}
//                 {/* <Eddit edditStore={this.edditStore}/> */}
//             </div>
//         )
//     }
// }

export default TestRouter