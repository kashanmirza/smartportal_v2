import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class SubMenu extends Component{
    constructor(props){
        super(props);
        this.state={
            menu : props.menu,
            selectedMenu:props.selectedMenu,
            titleCtrl:props.titleCtrl,
            selectedMenu:0
        }
    }

    menuSelected(menuType) {
        if (this.state.selectedMenu === menuType) {
            this.setState({ selectedMenu: null })
        }
        else {
            this.setState({ selectedMenu: menuType })
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            titleCtrl: nextProps.titleCtrl
        })
    }

    render(){
        const SideMenu = this.state.menu.map((menuItems)=>{
            if(menuItems.sideMenu && menuItems.sideMenu.length > 0 && this.state.selectedMenu === menuItems.id){
                var menu = (
                    <SubMenu
                        menuSelected={this.menuSelected}
                        menu={menuItems.sideMenu}
                        selectedMenu={this.state.selectedMenu}
                        titleCtrl={this.state.titleCtrl}
                    />
                )
            }

            return(
                <ul className="sideMenu">
                    <li>

                        <Link className={this.state.selectedMenu === menuItems.id ? 'active' : ''}
                              onClick={() => this.menuSelected(menuItems.id)} to={menuItems.to}>
                            <i className={menuItems.icon}></i>
                            <title className={this.state.titleCtrl}>{menuItems.title}</title>

                        </Link>
                        {menu}
                    </li>
                </ul>
            )
        });

        return(
            <div>
                {SideMenu}
            </div>
        )
    }
}

export default SubMenu;
