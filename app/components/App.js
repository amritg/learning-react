import React from 'react';
import Popular from './Popular';

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

import Nav from './Nav'
import Home from './Home'
import Battle from './Battle'
import Results from './Results'

class App extends React.Component {

    // Describes UI for this component
    
    render() {
        return (
            <Router>
                <div className='container'>
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path="/popular" component={Popular} />
                        <Route exact path="/battle" component={Battle} />
                        <Route path='/battle/results' component={Results} />
                        <Route render={
                            function () {
                                return <p>Page not found.</p>
                            }} 
                        />
                    </Switch>
                </div>
            </Router>
        );
    }
}

module.exports = App;