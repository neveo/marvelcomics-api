import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import pages
import Home from './pages/Home';
import About from './pages/About';
import SingleCharacter from './pages/SingleCharacter';
import Error from './pages/Error';

//import components
import Navbar from './components/Navbar';

function App(){
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/marvelcomics-api">
                    <Home />
                </Route>
                <Route exact path="/marvelcomics-ap/about">
                    <About />
                </Route>
                <Route exact path="/marvelcomics-api/character/:id">
                    <SingleCharacter />
                </Route>
                <Route exact path="/marvelcomics-api*">
                    <Error />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
