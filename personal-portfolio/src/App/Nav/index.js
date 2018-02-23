import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SNav = styled.div`
    display: flex;
    align-items: center;
    background-color: grey;
    height: 100%;
    width: 100%;
`;

function Nav(props) {
    return (
        <SNav>
            <h1>Hi</h1>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </SNav>
    )
}

export default Nav;