import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { H1, H2, H3, P } from "../styles/globalStyles";

const StyledCardContainer = styled.a`
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin: 0 auto;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  h2,
  p {
    opacity: 0;
  }

  :hover {
    img {
      opacity: 0.5;
    }
    h2,
    p {
      opacity: 1;
    }
  }
`;

const StyledHoverContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  

`;
const StyledProjectTitle = styled(H2)`
  font-size: 14px;
  font-weight: 300;

`;

const StyledProjectName = styled(H2)`
  margin:0;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  
`;

const StyledUnderliner = styled.div`
background-color: #e5fe9e;
width: 100%;
height: 40%;
position: absolute;
bottom: 3px;
z-index: -1;
  
  
`;
const StyledDescription = styled(P)`
  
`;

export default function Projects() {
  const projects = [
    {
      title: "Application re-design",
      name: "The Moment",
      description: "Dating App UI Design",
      image: "/homepage/image11.png",
      link: "https://www.behance.net/gallery/124327345/MOSH-Mens-health-made-easy?tracking_source=search_projects",
      appLink: "/themoment",
    },
    {
      title: "Application case study",
      name: "BOAR",
      description:
        "Restaurant business supporting app",
      image: "/homepage/image10.png",
      link: "https://www.behance.net/gallery/124327345/MOSH-Mens-health-made-easy?tracking_source=search_projects",
      appLink: "/boar",
    },
    {
      title: "UI design daily challenges",
      name: "DAILY UI",
      description:
        "See more on bēhance",
      image: "/homepage/rectangle9.png",
      link: "https://www.behance.net/gallery/124327345/MOSH-Mens-health-made-easy?tracking_source=search_projects",
      appLink: "/dailyui",
    },
    {
      title: "Project Development",
      name:"Smart contract Analyst",
      description: "Project in progress",
      image: "/homepage/inProgress.png",
      link: "https://www.behance.net/gallery/124327345/MOSH-Mens-health-made-easy?tracking_source=search_projects",
      appLink: "/smartcontract",
    },
  ];

  return (
    <StyledCardContainer id="work">
      {projects.map((project, index) => {
        return (
          <Link href={project.appLink} key={index}>
            <StyledCard key={index}>
              <Image src={project.image} width="700" height="400" alt="" />
              <StyledHoverContainer className="show">
                <StyledProjectTitle>{project.title}</StyledProjectTitle>
                <StyledProjectName>{project.name}<StyledUnderliner></StyledUnderliner></StyledProjectName>
                <StyledDescription>{project.description}</StyledDescription>
              </StyledHoverContainer>
            </StyledCard>
          </Link>
        );
      })}
    </StyledCardContainer>
  );
}
