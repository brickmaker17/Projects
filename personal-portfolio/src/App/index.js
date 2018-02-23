import React from 'react';
import Nav from './Nav/index';
import Canvas from './Canvas/index';
import styled from 'styled-components';
import Toggle from './Toggle/index';
import Main from './Main/index';
import {Switch, Route} from 'react-router-dom';
import About from './About/index';
import Contact from './Contact/index';
import '../styles/app.css';


const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 3;
    height: 100%;
`;
const Body = styled.div`
    height: 100vh;
    background: linear-gradient(to right, black, black, black, red, yellow);
`;



function App(props) {
    return (
        <Wrapper>
            <Nav/>
            <Switch>
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/' component={Main} />
            </Switch>
        </Wrapper>
    )
}

export default App;