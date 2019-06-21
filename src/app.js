import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import {ConfigureStore} from './redux/configureStore';

//routes
import Login from './components/pageComponent/Login';
import Dashboard from './components/pageComponent/Dashboard';

const store = ConfigureStore();

class App extends Component {
    render() {
        return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" exact component={Login}></Route>
                    <Route path="/app" component={Dashboard}/>
                    {/* <Route component={NotFound}/>*/}
                </Switch>
            </Router>
        </Provider>
        );
    }
}

export default App;