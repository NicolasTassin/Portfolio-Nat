import React from "react";
import Styled from "styled-components";
import { globalStyles } from "../styles/globalStyles";

const FooterContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: ${globalStyles.margin};
    font-family: "Poppins", sans-serif;
    
    margin-top: 5%;
    

    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;


    letter-spacing: 0.05em;
    @media (max-width: 768px) {
      flex-direction: column;
      margin: 0;
      
    }
    `;

const UlContainer = Styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 25%;
    @media (max-width: 768px) {
      padding:0;
      width: 50%;
      
    }
    
    
`;

const LiContainer = Styled.li`
    list-style: none;
    position: relative;
  
    a{
      text-decoration: none;
      color: black;
    }
    .point{
      
    }
`;
const Point = Styled.div`


div{
  width: 5px;
  height: 5px;
  background-color: black;
  border-radius: 50%;
}

`;

const ListContainer = Styled.div`
    background-color: ${globalStyles.colors.green};
    position: absolute;
    width: 100%;
    height: 10px;
    z-index: -1;
    bottom: 0;

    
    
    
`;

export default function Footer() {
  return (
    <footer>
      <FooterContainer>
        <p>nutt723@me.com</p>
        
          <UlContainer>
            <LiContainer>
              <ListContainer></ListContainer>
              <a href="https://www.linkedin.com/in/sasiya/">Linkedin</a>
            </LiContainer>
            <Point className="point">
              <div></div>
            </Point>
            <LiContainer>
              <ListContainer></ListContainer>
              <a href="https://linktr.ee/sasiya.n">Linktree</a>
            </LiContainer>
            <Point className="point">
              <div></div>
            </Point>
            <LiContainer>
              <ListContainer></ListContainer>
              <a href="mailto:nutt723@me.com">Contact</a>
            </LiContainer>
          </UlContainer>
        
      </FooterContainer>
    </footer>
  );
}
