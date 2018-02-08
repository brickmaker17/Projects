import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Add from './Add'
import Nav from '../Nav'
import About from '../App/About'

function App(props){
        return (
            <div>
                <Nav />
                <Switch>
                    {/* <Route path="/" component={} /> */}
                    <Route path="/add" component={Add} />
                    <Route path="/about" component={About} />
                    {/* List Component */}
                </Switch>
            </div>
        )
}

export default App;