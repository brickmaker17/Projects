import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Add from './Add'
import Nav from '../Nav'
import About from '../App/About'
import Search from './Search'
import './styles/App.css' 

function App(props){
        return (
            <div>
                <Nav />
                <Switch>
                    <Route path="/home" component={Search} />
                    <Route path="/add" component={Add} />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        )
}

export default App;