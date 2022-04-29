import React from "react";
import Styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { globalStyles } from "../styles/globalStyles";

const StyledContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 5% 0;
    grid-template-columns: ${globalStyles.gridTemplateColumns}; };
    @media (max-width: 768px) {
      grid-template-row: 1fr 1fr;
  }
  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`;

const StyledList = Styled.ul`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 20px;
justify-content: space-around;


@media (max-width: 768px) {
  margin-top:10%;
  grid-template-row: 1fr 1fr 1fr 1fr;
  padding:0;
}

`;
const StyledListElement = Styled.li<{ display?: string; alignItem?: string }>`
font: bold 16px 'Poppins', sans-serif;
display:${(props) => props.display};
align-items:${(props) => props.alignItem};
line-height: 2;
position: relative;
cursor: pointer;
text-decoration: none; /* remove underline if using A instead of BUTTON tag */
overflow: hidden;
transition: all .5s;

:hover{
.arrow{
  transform: rotate(135deg);
  margin-bottom: 10px;
  transition: all .5s;
}
}
a{
  text-decoration: none;
  color: #ADADAD;
}
    :hover {
        color: #000;
    }

    :before,
    :after{
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        right: 0;
        bottom: 0;
        height: 40%;
        background: #E5FE9E ; /* onhover background color */
        z-index: -1;
         transform: translate3D(-100%,0,0); /* move elements above button so they don't appear initially */
        transition: all .2s;
        text-decoration: none;
}


    :hover:after{
        transform: translate3D(0,0,0);
        transition: all .5s;
        color: black;
        text-decoration: none;
    }
  
}
`;

const Arrow = Styled.div`
  border-top: 3px solid #ADADAD;
  border-right: 3px solid #ADADAD;
  margin:10%;
  width:6px;
  height:6px;
  transform: rotate(45deg);
  
`;

export default function NavBar() {
  return (
    <StyledContainer>
      <Link href="/" passHref>
        <Image src="/header/logo.svg" alt="Project 1" width={200} height={50} />
      </Link>
      <StyledList>
        <StyledListElement display="flex" alignItem="center">
          <Link href="/#work">work</Link>
          <Arrow className="arrow"></Arrow>
        </StyledListElement>

        <StyledListElement>
          <Link href="/about">about</Link>
        </StyledListElement>

        <StyledListElement>
          <a href="https://linktr.ee/sasiya.n">Linktree</a>
        </StyledListElement>

        <StyledListElement>
          <a href="mailto:mailto:nutt723@me.com">contact</a>
        </StyledListElement>

      </StyledList>
    </StyledContainer>
  );
}
