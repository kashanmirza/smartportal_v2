import React, { Component } from 'react';
import _ from 'lodash';
import Header from '../customComponent/Header.jsx';
import Menu from '../customComponent/Menu';
import Bradecums from '../customComponent/Bradecums.jsx';
import Routes from "../../routes";
import menu from "../../constants/menu"
import '../../assets/dependencies.jsx';



class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.sidebarCtrlFunc = this.sidebarCtrlFunc.bind(this);
    this.titleCtrlFunc = this.titleCtrlFunc.bind(this);

    this.state = {
      sidebarCtrl: 'dashboard_Sitebar',
      titleCtrl: 'titleShow',
      match:props.match,
      date: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      hours: new Date().getHours(),
      min: new Date().getMinutes(),
      sec: new Date().getSeconds(),
      menu:_.cloneDeep(menu)

    }

  }


  sidebarCtrlFunc() {
    this.setState({
      sidebarCtrl: this.state.sidebarCtrl == 'dashboard_Sitebar' ? 'dashboard_Sitebar_Collaps' : 'dashboard_Sitebar',
      titleCtrl: this.state.titleCtrl == 'titleShow' ? 'titleHide' : 'titleShow',
    })
  }

  titleCtrlFunc() {
    this.setState({
    })
  }

  render() {
    return (
      <div>
        <Header
          sidebarCtrlFunc={this.sidebarCtrlFunc}
          titleCtrl={this.state.titleCtrl}
         // titleCtrlFunc={this.titleCtrlFunc}
        />
        <Menu
          sidebarCtrl={this.state.sidebarCtrl}
          titleCtrl={this.state.titleCtrl}
          menu={this.state.menu}
        />
        <div className="dashboard_Container">

            <Routes match={this.state.match}/>

        </div>
        <div className="footer clearfix">
        <p>Current Date &amp; Time:
        <span>{this.state.date} / {this.state.month} / {this.state.year}</span>
        <span> {this.state.hours} / {this.state.min} / {this.state.sec}</span>
        </p>
        </div>
      </div>
    );
  }
}

export default Dashboard;
