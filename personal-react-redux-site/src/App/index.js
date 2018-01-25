import React from 'react';
import Header from './Header';
import Coin from './Coin';
import { Switch, Route } from "react-router-dom";
import './index.css';

function App(props) {
    return (
        <div>
            <h1 className = "head">Crypto Coin Price Lookup</h1>
            <div className="content">

                <Header />
                <Switch>
                    <Route path="/coins/:id" component={Coin} />
                </Switch>
            </div>
            <footer className="foot">©Luke Barrett <a href="https://www.facebook.com/luke.barrett.169">Facebook</a><a href="https://github.com/brickmaker17">Github</a></footer>
        </div>
    )
}
export default App;