import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SNav = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    background: gray;
    height: 60px;
    width: 100vw;
`
const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    justify-self: center;
    align-items: center;
    :hover {
        border-radius: 5px;
        background-color: #555;
        color: white;
    }
`   




function Nav(props) {
    return (
        <SNav>
            <StyledLink to='/'>Home</StyledLink>
            <StyledLink to='/about'>About</StyledLink>
            <StyledLink to='/contact'>Contact</StyledLink>
        </SNav>
    )
}

export default Nav;