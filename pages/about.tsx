import React from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

import { H1, H2, H3, P, globalStyles } from "../styles/globalStyles";

const MainContainer = styled.div`
  font-family: "Poppins", sans-serif;
  
`;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 1fr 1fr 10%;
  grid-template-rows: repeat(auto, 1fr);
  margin: 10% 0;
`;
const ContentLeft = styled.div`
  grid-column: 2;
  grid-row: 5;
`;

const Phonetic = styled.div`
  font-weight: 300;
  font-style: italic;
  font-size: 20px;
  line-height: 21px;
  color: #ADADAD;
`;

const ContentRight = styled.div`
  background-color: #e5fe9e;
  grid-column: 3 / 5;
  grid-row: 4 / 8;
  padding-left:40px;
  position: relative;
  
`;
const Hello = styled.div`
  display-grid;
  grid-template-rows: 1fr 1fr;
  

  h1 {
    position: absolute;
    top: -45px;
    font: 300 50px 'Poppins', sans-serif;
    line-height: 26px;
  }
  
  
`;

const WhiteSpace = styled.div`
  grid-row: 2;background-color: white;
  grid-row: 1 ;
  height: 100%;
  width: 100%;
`;
const Description = styled.div`
margin: 5% auto 5%;
font: 300 18px 'Poppins', sans-serif;
line-height: 26px;
`;
const Contact = styled.div`
  font: 600 22px 'Poppins', sans-serif;
  line-height: 26px;
`;
const Links = styled.div`
font: 600 22px 'Poppins', sans-serif;
line-height: 26px;
`;

const StyledLink = styled(P)`
    font-size: 16px;
    font-weight: 300;
    
   
a {
  text-decoration: none;
  color: black;
}
`
const NavContainer = styled.div`
  margin: ${globalStyles.margin};
`

const About: NextPage = () => {
  return (
    <MainContainer>
      <NavContainer>
      <NavBar />
      </NavContainer>
      <AboutContainer>
        <ContentLeft>
          <Image src="/about/nameAbout.png" height={150} width={388}></Image>
          <Phonetic> /sa-see-yaa  tape-pie-toon/</Phonetic>
        </ContentLeft>

        <ContentRight>
          <Hello>
            <WhiteSpace className="whitespace"></WhiteSpace>
            <H1>Hello!</H1>
          </Hello>
          <Description>Thanks for dropping by. I am a <b>self-taught ux/ui designer</b> with strongly background as years experienced architect with passion of digital & technology. I love connecting with and understanding people, collabration and solve challenging problems with a design.</Description>
          <Contact>Contact
          <StyledLink><a href="mailto:mailto:nutt723@me.com">nutt723@me.com</a></StyledLink>
          </Contact>
          <Links>Link
          <StyledLink ><a href="https://linktr.ee/sasiya.n">Resume</a></StyledLink>
          <StyledLink ><a href="https://linktr.ee/sasiya.n">Linkedin</a></StyledLink>
          </Links>
        </ContentRight>
      </AboutContainer>
      <NavContainer>
      <Footer />
      </NavContainer>
    </MainContainer>
  );
};

export default About;
