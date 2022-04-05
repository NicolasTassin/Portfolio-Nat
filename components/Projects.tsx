import React from "react";
import styled from "styled-components";
import Image from "next/image";
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
  justify-content: center;
  background-image: url("/images/background.jpg");
  align-items: center;
  cursor: pointer;
  position: relative;
  h2, p{
    opacity: 0;
  }

  :hover {
    img{
      opacity: 0.5;
    }
    h2, p{
      opacity: 1;
    }
  }
  
`;


const StyledHoverContainer = styled.div`

position: absolute;
`;
const StyledProjectTitle = styled(H2)`
  display: flex;
  justify-content: center;
`;

const StyledProjectName = styled(H2)`
  top: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const StyledUnderliner = styled.div`
  background-color: #e5fe9e;
  height: 20px;
`;
const StyledDescription = styled(P)`
  display: flex;
  justify-content: center;
`;



export default function Projects() {
  const projects = [
    {
      title: "Application re-design",
      name: "The Moment",
      description: "Dating app UI Design",
      image: "/../public/image11.png",
      link: "https://www.behance.net/gallery/124327345/MOSH-Mens-health-made-easy?tracking_source=search_projects",
    },
    {
      title: "Application case study",
      name: "BOAR",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm.",
      image: "/../public/image10.png",
      link: "https://www.behance.net/gallery/124327345/MOSH-Mens-health-made-easy?tracking_source=search_projects",
    },
    {
      title: "UI design daily challenges",
      name: "DAILY UI",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm.",
      image: "/../public/Rectangle 9.png",
      link: "https://www.behance.net/gallery/124327345/MOSH-Mens-health-made-easy?tracking_source=search_projects",
    },
    {
      title: "Smart Contract Analyst",
      description: "Project in progress",
      image: "/../public/project2.png",
      link: "https://www.behance.net/gallery/124327345/MOSH-Mens-health-made-easy?tracking_source=search_projects",
    },
  ];

  // const handleMouseIn = (e: any, index: any) => {
  //   e.target.style.opacity = "0.5";
  //   console.log(index, 'index mousin');
  //   //@ts-ignore
  //   console.log(e.target, "is that queryssss");
  //   setHover(true);
    
    
  // };

  // const handleMouseOut = (e: any, index: any) => {
  //   e.target.style.opacity = "1";
  //   setHover(false);
  // };

  const [hover, setHover] = React.useState(false);

  return (
    <StyledCardContainer>
      {projects.map((project, index) => {
        console.log(index, 'index')
        return (
          <StyledCard
           
            key={index}
           
          >
            <Image src={project.image} width="700" height="400" alt="" />
            <StyledHoverContainer className='show'>
              <StyledProjectTitle>{project.title}</StyledProjectTitle>
              <StyledProjectName>
                <StyledUnderliner>{project.name}</StyledUnderliner>
              </StyledProjectName>
              <StyledDescription>{project.description}</StyledDescription>
            </StyledHoverContainer>
          </StyledCard>
        );
      })}
    </StyledCardContainer>
  );
}
