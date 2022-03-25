import React from "react";
import styled from "styled-components";
import Image from "next/image";

// const StyledContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// `;

const StyledCardContainer = styled.a`
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin: 10px 0;
  width: 100%;
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 526px;
  height: 300px;
  background-color: #c4c4c4;
  border-radius: 30px;
  //margin: 0 10px;
  cursor: pointer;
  :hover {
    background-color: #e5fe9e;
  }
`;

export default function Projects() {
  const projects = [
    {
      title: "The Moment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm.",
      image: "/../public/project2.png",
      link: "https://www.behance.net/gallery/124327345/MOSH-Mens-health-made-easy?tracking_source=search_projects",
    },
    {
      title: "Food Ordering App",
      image: "/../public/project2.png",
      link: "https://www.behance.net/gallery/124327345/MOSH-Mens-health-made-easy?tracking_source=search_projects",
    },
    {
      title: "DAILY UI",
      image: "/../public/project2.png",
      link: "https://www.behance.net/gallery/124327345/MOSH-Mens-health-made-easy?tracking_source=search_projects",
    },
    {
      title: "Smart Contract Analyst",
      image: "/../public/project2.png",
      link: "https://www.behance.net/gallery/124327345/MOSH-Mens-health-made-easy?tracking_source=search_projects",
    },
  ];
  return (
    <StyledCardContainer>
      {projects.map((project, index) => {
        return (
          <StyledCard key={index}>
            {/* <Image key={index} src={project.image} width="100px"  height="100"/> */}
            <h1>{project.title}</h1>
            <p>Check on Behance</p>
          </StyledCard>
        );
      })}
    </StyledCardContainer>
  );
}
