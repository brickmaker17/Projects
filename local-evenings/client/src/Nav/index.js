import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 30px;
    background: gray;
`;
const StyledLink = styled(Link)`
    margin: 5px;
    text-decoration: none;
    text-align: center;
    
`;


function Nav(props){
    return(
        <Wrapper>
            <StyledLink to="/home">Home</StyledLink>
            <StyledLink to="/add">Add</StyledLink>
            <StyledLink to="/about">About</StyledLink>
            {/* <Add/> */}
        </Wrapper>
    )
}

export default Nav;