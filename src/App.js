import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './form';
import Search from './search';

function App(){
    return (
        <Router>
            <div className="container">
                <Switch>
                    <Route exact path="/marvelcomics-api">
                        <Form />
                    </Route>
                    <Route exact path="/search">
                        <Search />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
