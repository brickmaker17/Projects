import React from 'react';
import Header from './Header';
import Coin from './Coin';
import { Switch, Route } from "react-router-dom";
import './index.css';

function App(props) {
    return (
        <div className= "content">
            <Header />
            <Switch>
                <Route path="/coins/:id" component={Coin} />
            </Switch>

        </div>
    )
}
export default App;