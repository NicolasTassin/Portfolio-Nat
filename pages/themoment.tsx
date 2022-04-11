import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { H1, H2, H3 } from "../styles/globalStyles";

const MainContainer = styled.div`
  display: grid;
  font-family: Poppins, sans-serif;

  grid-template-columns: 10% 1fr 10%;
  grid-template-rows: repeat(auto, 1fr);
`;

const StyledAppContainer = styled.div`
  grid-column: 2;
  justify-content: center;
`;

const StyledTitleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TitleContainer = styled.div`
  display: grid;
  grid-template-row: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
`;

const StyledTitle = styled.div`
  margin: 10px;
  color: #adadad;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
`;

const Name = styled.div`
  height: 28px;
  background-color: #e5fe9e;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 12px;
  letter-spacing: 0.05em;
`;

const Description = styled(H3)``;

const Button = styled.button`
  background-color: white;
  border-radius: 4px;
  height: 37px;
  top: 444px;
  filter: drop-shadow(4px 4px 0px #000000);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.02em;
  text-align: left;
`;
const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  grid-column: 1 / 4;
  padding-bottom: 5%;
`;
const Threeseparator = styled.div`
  display: grid;
  grid-template-columns: 10% 20% 20% 10%;
`;
const Column1 = styled.div`
  grid-column: 2;
`;
const Column2 = styled.div`
  grid-column: 3;
`;
const Column3 = styled.div`
  grid-column: 4;
`;

const Content = styled.div<{ gridColumn?: string }>`
  padding: 5% 0;
  margin: 0 10%;
  grid-column: ${(props) => props.gridColumn || "2 / 3"};
`;

const content = {
  header: {
    projectDescription: "Appication redesign",
    title: "The Moment",
    description:
      "The dating app that brings you the fun of meeting IN REAL LIFE.",
  },
  overview: {
    title: "OVERVIEW",
    content:
      "This project was a re-design of an in process dating application that required very needed design updates for launching. The goal of re-design this time is to improve the design to make them look and feel sleek and professional. There should be consistency in the design of the screens.",
    myRole: {
      title: "My Role",
      content: "UX/UI Designer",
    },
    projectType: {
      title: "Project Type",
      content: "Application re-design",
    },
    duration: {
      title: "Duration",
      content: "Febuary - March 2022",
    },
    tools: {
      title: "Tools",
      content: "Figma",
    },
    launch: {
      title: "Launch",
      content: "Q2-2022",
    },
  },
  designGoal: {
    title: "Design Goal",
    description:
      "This project was a re-design of an in process dating application that required very needed design updates for launching. The goal of re-design this time is to improve the design to make them look and feel sleek and professional. There should be consistency in the design of the screens.",
    content1: {
      title: "1. SEARCH",
      content: "Search singles who are ready to mingle close by ",
    },
    content2: {
      title: "2. MATCH",
      content: "Show them you’re interested before the chance is gone forever.",
    },
    content3: {
      title: "3. DATE",
      content: "Go on a mini-date with your match to see how you get on.",
    },
  },
};

const DesignGoalContainer = styled.div`
  display: grid;
  grid-column: 2 / 3;
  grid-template-rows: 1fr 1fr 1fr;
`;
const DesignGoalTitle = styled.div`
  grid-column: 1;
  grid-row: 1;
`;
const HowItWorksContainer = styled.div`
  display: grid;
  grid-row: 2;
`;
const HowItWorksList = styled.div`
  display: grid;
  grid-row: 2 / 4;
  grid-template-columns: repeat(3, 25%);
  grid-template-row: 1fr 1fr;
  grid-column-gap: 5%;
`;
const HowItWorks1 = styled.div`
  grid-column: 1;
`;
const HowItWorks2 = styled.div`
  grid-column: 2;
`;
const HowItWorks3 = styled.div`
  grid-column: 3;
`;

const DesignGoalConclusion = styled.div`
  grid-column: 1;
  grid-row: 3;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-row: 4;
  grid-column: 2 / 3;
`;

const Imagecontainer = styled.div<{
  gridColumn?: string;
  width?: string;
  margin?: string;
}>`
  display: grid;
  grid-column: ${(props) => props.gridColumn || "1 / 3"};
`;

const Project1: NextPage = () => {
  return (
    <MainContainer>
      <StyledAppContainer>
        <Head>
          <title>I am Sasiya</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <NavBar />

        <StyledTitleContainer>
          <Image
            src="/boar/iphonebg.png"
            alt="Project 1"
            width={1800}
            height={1200}
          />
          <TitleContainer>
            <StyledTitle>{content.header.projectDescription}</StyledTitle>
            <Name>{content.header.title}</Name>
            <Description>{content.header.description}</Description>
            <Button>VIEW PROTOTYPE</Button>
          </TitleContainer>
        </StyledTitleContainer>
      </StyledAppContainer>

      <OverviewContainer>
        <Content>
          <H3>OVERVIEW</H3>
          <H3>{content.overview.content}</H3>
        </Content>

        <Threeseparator>
          <Column1>
            <H3>MY ROLE</H3>
            <H3>UI/UX Designer</H3>
          </Column1>
          <Column2>
            <H3>PROJECT TYPE</H3>
            <H3>Application re-design</H3>
          </Column2>
        </Threeseparator>
        <Threeseparator>
          <Column1>
            <H3>DURATION</H3>
            <H3>February - March 2022</H3>
          </Column1>
          <Column2>
            <H3>TOOLS</H3>
            <H3>Figma</H3>
          </Column2>
          <Column3>
            <H3>LAUNCH</H3>
            <H3>Q2-2022</H3>
          </Column3>
        </Threeseparator>
      </OverviewContainer>
      <DesignGoalContainer>
        <DesignGoalTitle>
          <H1>{content.designGoal.title}</H1>
          <H3>{content.designGoal.description}</H3>
        </DesignGoalTitle>
        <HowItWorksContainer>
          <H2>HOW IT WORKS</H2>
          <HowItWorksList>
            <HowItWorks1>
              <H2>{content.designGoal.content1.title}</H2>
              <H3>{content.designGoal.content1.content}</H3>
            </HowItWorks1>
            <HowItWorks2>
              <H2>{content.designGoal.content2.title}</H2>
              <H3>{content.designGoal.content3.content}</H3>
            </HowItWorks2>
            <HowItWorks3>
              <H2>{content.designGoal.content3.title}</H2>
              <H3>{content.designGoal.content3.content}</H3>
            </HowItWorks3>
          </HowItWorksList>
        </HowItWorksContainer>
        <DesignGoalConclusion>
          <H3>{content.designGoal.description}</H3>
        </DesignGoalConclusion>
      </DesignGoalContainer>
      <ImageGrid>
        <H2>USER FLOW</H2>
        <Imagecontainer>
          <Image
            src="/themoment/flow2.png"
            alt="Project 1"
            width={1067}
            height={600}
          />
        </Imagecontainer>
        <Imagecontainer margin="10%">
          <H2>WIREFRAMES</H2>
          <Image
            src="/themoment/02.png"
            alt="Project 1"
            width={977}
            height={420}
          />
        </Imagecontainer>
        <Imagecontainer>
        <Image
          src="/themoment/03.png"
          alt="Project 1"
          width={1090}
          height={820}
        />
      </Imagecontainer>
      <Imagecontainer>
        <H2>FINAL DESIGN</H2>
        <Image
          src="/themoment/04.png"
          alt="Project 1"
          width={1090}
          height={820}
        />
      </Imagecontainer>
      <Imagecontainer>
        <Image
          src="/themoment/image16.png"
          alt="Project 1"
          width={1090}
          height={820}
        />
        </Imagecontainer>
        <Imagecontainer>
        <Image
          src="/themoment/image17.png"
          alt="Project 1"
          width={1090}
          height={820}
        />
        </Imagecontainer>
        <Imagecontainer>
        <Image
          src="/themoment/image18.png"
          alt="Project 1"
          width={1090}
          height={820}
        />
        </Imagecontainer>
        <Imagecontainer>
        <Image
          src="/themoment/image19.png"
          alt="Project 1"
          width={1090}
          height={820}
        />
        </Imagecontainer>
      </ImageGrid>
    </MainContainer>
  );
};

export default Project1;
