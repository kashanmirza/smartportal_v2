import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import _ from 'lodash';
import SubMenu from '../../responseJson/subMenu';

class Menu extends React.Component {
  constructor(props) {
    super(props);
console.log("----------------|||||||||||||  ", props.titleCtrl)
      this.state = {
          sidebarCtrl: this.props.sidebarCtrl,
          titleCtrl: this.props.titleCtrl,
          selectedMenu: "0"
      }
  }



   componentWillReceiveProps(nextProps) {
        this.setState({
            sidebarCtrl: nextProps.sidebarCtrl,
            titleCtrl: nextProps.titleCtrl
        })
    }

    menuSelected(menuType) {
        if (this.state.selectedMenu === menuType) {
            this.setState({ selectedMenu: null })
        }else{
            this.setState({
                selectedMenu: menuType
            })
        }
    }



  render() {

      return(
          <div className={this.props.sidebarCtrl}>
              <SubMenu
                  menuSelected={this.menuSelected}
                  menu={this.props.menu}
                  selectedMenu={this.state.selectedMenu}
                  titleCtrl={this.state.titleCtrl}
              />
          </div>
      )

  }
}

export default Menu;




