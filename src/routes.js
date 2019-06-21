import React,{ Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import OrganizationManagement from './components/portalPages/OrganizationManagement'
import Form from './components/pageComponent/Formhandling'


class Routes extends Component{
    constructor(props){
        super(props)
        this.state={
            match:props.match
        }
    }
    render(){
        return(
            <div>
                <Switch>
                    <Route path={`${this.state.match.url}/OrganizationManagement`}  exact component={OrganizationManagement}/>
                    <Route path={`${this.state.match.url}/Form`} exact component={Form}/>
                </Switch>
            </div>
        )
    }
}

export default Routes;

