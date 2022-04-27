import React from "react";
import Styled from "styled-components";
import { globalStyles } from "../styles/globalStyles";

const FooterContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 200px;
    //margin: ${globalStyles.margin};

    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;


letter-spacing: 0.05em;
    `;

const UlContainer = Styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    
    position: relative;
    
    
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
display: flex;
justify-content: center;
align-items: center;

div{
  width: 8px;
  height: 8px;
  background-color: black;
  border-radius: 50%;
}

`

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
        <p>nutt@me.com</p>
        <div>
          <UlContainer>
            
            <LiContainer>
              <ListContainer></ListContainer>
              <a href='https://www.linkedin.com/in/sasiya/'>Linkedin</a>
            </LiContainer>
              <Point className="point"><div></div></Point>
            <LiContainer>
              <ListContainer></ListContainer>
              <a href='https://linktr.ee/sasiya.n'>Linktree</a>
            </LiContainer>
            <Point className="point"><div></div></Point>
            <LiContainer>
              <ListContainer></ListContainer>
              <a href="mailto:mailto:nutt723@me.com">Contact</a>
            </LiContainer>

          </UlContainer>
        </div>
      </FooterContainer>
    </footer>
  );
}
