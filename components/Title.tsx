import React from 'react';
import Styled from 'styled-components';

const StyledContainer = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 450px;
    flex-direction: column;
    
`;

const StyledH1 = Styled.h1`
    font-family: 'Merriweather', serif;
    font-weight: 400;
    line-height: 45.25px;
    `;

const StyledH3 = Styled.h3`
    font-family: 'Monstserrat', sans-serif;
    font-weight: 400, regular;
    font-size: 14px;
    color: #ACACAC;
    margin: 5px auto;
    ;
    `;

const StyledButton = Styled.button`
    width: 115px;
    height: 35px;
    border-radius: 10px;
    background-color: white;
    border: 1px solid #7C7C7C;
    margin: 20px auto;
    transition: all 300ms ease;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    :hover {
        background-color: #E5FE9E;
    }
`;

export default function Title(){
    const title = "Hello! I'm Sasiya"
    const subtitle = "I'm a Designer"
    const subtitle2 = "I love fun UI, collaboration and solving problem" 
    return (
        <StyledContainer>
            <StyledH1>{title}</StyledH1>
            <StyledH3>{subtitle}</StyledH3>
            <StyledH3>{subtitle2}</StyledH3>
            <StyledButton>READ MORE</StyledButton>
        </StyledContainer>
    )
}