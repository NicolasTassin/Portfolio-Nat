import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import Title from '../components/Title'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import styled from 'styled-components'


const StyledAppContainer = styled.div`
display: flex;
flex-direction: column;
margin: 5% auto;
width: calc(100vw - 20%);
font-family: "Poppins", sans-serif;
`;
const Home: NextPage = () => {
  return (
    
    <StyledAppContainer>
      <Head>
        <title>I am Sasiya</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/homepage/avatar-01.png" />
        
      </Head>

      <NavBar />
      <Title />
      <Projects />
    </StyledAppContainer>
  )
}

export default Home
