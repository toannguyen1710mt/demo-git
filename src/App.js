import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

// import component
import NavigationBar from './Navigation/Navigation'
import Home from './HomePage/Home'
import Investment from './InvestmentPage/index'
import NavbarInfo from './InfoCompanyPage/NavbarInfo'
import Contact from './ContactPage/Contact'
import infos from './assets/Data/InfoData'

// import icon-font
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPen, faImages, faExclamation, faCopy, faTimes, faClipboard, faBusinessTime, faPhone, faHome } from '@fortawesome/free-solid-svg-icons'
library.add(faPen, faImages, faExclamation, faCopy, faTimes, faHome, faClipboard, faBusinessTime, faPhone)


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infos: infos[0],
      OverViewData: infos[1],
      KnowledgeDatas: infos[2],
      InvestmentDatasA: infos[3],
      InvestmentDatasB: infos[4],
      InvestmentDatasC: infos[5],
      InvestmentDatasD: infos[6],
      CarouselData: infos[7],
      QuoteDatas: infos[8],
      FooterHomeDatas: infos[9],
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div className='container-fluid' style={{ margin: "50px" }}>
          <div className='row'>
            <div style={{ paddingLeft: "0px" }} className='col-xl-3 col-lg-3 col-sm-3 col-md-3 col-xs-12'>
              <NavigationBar />
            </div>
            <div className='col-xl-9 col-lg-9 col-sm-9 col-md-9 col-xs-12'>
              <Route path='/Home' component={() => <Home Datas={this.state.CarouselData} QuoteDatas={this.state.QuoteDatas} FooterDatas={this.state.FooterHomeDatas} />} /> 
              <Route path='/InvestmentManagement' component={() => <Investment DatasA={this.state.InvestmentDatasA} DatasB={this.state.InvestmentDatasB} 
              DatasC={this.state.InvestmentDatasC}  DatasD={this.state.InvestmentDatasD} />} />
              <Route path='/NavbarInfo' component={() => <NavbarInfo infos={this.state.infos} Datas={this.state.CarouselData}
                OVDatas={this.state.OverViewData} KnowledgeDatas={this.state.KnowledgeDatas} />} />
              <Route path='/Contact' component={Contact} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
