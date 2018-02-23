import React from 'react'
import Workout from "../images/workout.png";
import Local from '../images/localEvenings.png';
import Full from '../images/fullstack.png';
import styled from 'styled-components';
import Canvas from '../Canvas/index';

const ImgWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    
`
const Img = styled.img`
    height: 150px;
    width: 150px;
`
const Content = styled.div`
    padding: 10px;
    &:hover ${Img} {
        height: auto;
        width: 800px;
        
    }
`
const Body = styled.div`
    height: 100vh;
    background: linear-gradient(to right, black, black, black, red, yellow);
`

const Heading = styled.h2`
    color: gray;
`

function Main() {
    return (
        <div>
        <Body>
        <Canvas />
        <ImgWrapper>
            <Content>
                <Heading>Workout App</Heading>
                <Img src={Workout} alt="Workout app" />
            </Content>
            <Content>
                <Heading>Buisness site</Heading>
                <Img src={Local} alt="HTML and styling app" />
            </Content>
            <Content>
                <Heading>Full Stack</Heading>
                <Img src={Full} alt="Full stack site" />
            </Content>
        </ImgWrapper>
        </Body>
        </div>
    )
}

export default Main;