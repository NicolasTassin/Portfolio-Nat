import React from "react";
import Styled from "styled-components";
import Image from "next/image";

const StyledContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
      grid-template-row: 1fr 1fr;
  }
  @media (max-width: 500px) {
    align-items: center;
    flex-direction: column;
  }
`;

const StyledLogoContainer = Styled.div`
   display: flex;
   
    
    
`;
const StyledList = Styled.ul`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 20px;
justify-content: space-around;
margin-left:0;
padding: 0;
@media (max-width: 768px) {
  margin-top:10%;
  grid-template-row: 1fr 1fr 1fr 1fr;
}

`;
const StyledListElement = Styled.li`
color: #ADADAD;
background: transparent;
border: none;
padding: 8px 0px; 
font: bold 16px 'Bitter', sans-serif;
line-height: 2;
position: relative;
display: inline-block;
cursor: pointer;
text-decoration: none; /* remove underline if using A instead of BUTTON tag */
overflow: hidden;
transition: all .5s;
    :hover {
        color: #000;
    }

    :before,
    :after{
        content: '';
        position: absolute;
        left: 0;
        top: 20%;
        right: 0;
        bottom: 0;
        height: 50%;
         background: #E5FE9E ; /* onhover background color */
        z-index: -1;
         transform: translate3D(-100%,0,0); /* move elements above button so they don't appear initially */
        transition: all .2s;
}


    :hover:after{
        transform: translate3D(0,0,0);
        transition: all .5s;
        color: black;
    }
}
`;

export default function NavBar() {
  return (
    <StyledContainer>
      <Image
              src="/header/logo.svg"
              alt="Project 1"
              width={200}
              height={50}
            />
        <StyledList>
          <StyledListElement>
            <a>work</a>
          </StyledListElement>
          <StyledListElement>
            <a>about</a>
          </StyledListElement>
          <StyledListElement>
            <a>Linktree</a>
          </StyledListElement>
          <StyledListElement>
            <a>contact</a>
          </StyledListElement>
        </StyledList>
    </StyledContainer>
  );
}


