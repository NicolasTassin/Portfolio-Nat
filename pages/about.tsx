import React from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";

import { H1, H2, H3, P, globalStyles } from "../styles/globalStyles";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 1fr 10%;
  font-family: "Poppins", sans-serif;
`;
const AppContainer = styled.div`
  grid-column: 2;
`;

const Green = styled.div`
  background-color: red;
  grid-column-start: 2;

`;
const Divider = styled.div`
  display: grid;
  grid-column: 2/4;
  grid-template-columns: 1fr 1fr;
  margin: calc(100vh - 75%) 0;
`;
const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  
 
`;

const Phonetic = styled.div`
  grid-row: 4;
  grid-column: 1 / 4;
  font-family: Poppins;
  font-size: 22px;
  font-style: italic;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #ADADAD;

`;

const DetailsContainer = styled.div`
  position: relative;
  
  
`;

const StyledH1 = styled(H1)`
  grid-template-rows: 1fr 1fr;  
  
`;
const GreenBackground = styled.div`
  background-color: #e5fe9e;
  height:calc(100%-100px);
  width:100%;
  top:100px;
  grid-row: 2;
  z-index: -1;
  
`;
const DetailsContent = styled.div``;
const DetailsContact = styled.div``;
const DetailsLink = styled.div``;

const About: NextPage = () => {
  return (
    <MainContainer>
      <Green></Green>
      <AppContainer>
      
        <NavBar />
        <Divider>
          <NameContainer>
            <Image src="/about/nameAbout.png" width={388} height={150}></Image>
            <Phonetic>/sa-see-yaa tape-pie-toon/</Phonetic>
          </NameContainer>

          <DetailsContainer>
           
          <GreenBackground>
                <StyledH1>Hello!</StyledH1>
              
           
            <DetailsContent>
              Thanks for dropping by. I am a self-taught ux/ui designer with
              strongly background as years experienced architect with passion of
              digital & technology. I love connecting with and understanding
              people, collabration and solve challenging problems with a design.
            </DetailsContent>
            <DetailsContact>
              <H3>Contact</H3>
              <P>nutt723@me.com</P>
            </DetailsContact>

            <DetailsLink>
              <H3>Link</H3>
              <P>Resume</P>
              <P>Linkedin</P>
            </DetailsLink>
            </GreenBackground>
          </DetailsContainer>
        </Divider>
        <Footer />
      </AppContainer>
    </MainContainer>
  );
};

export default About;
