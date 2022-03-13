import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledCardContainer = styled.div`
  display: flex;
  margin: 10px 0;
`;

const StyledCard = styled.div`
  width: 526px;
  height: 300px;
  background-color: #c4c4c4;
  border-radius: 30px;
  margin: 0 10px;
`;

export default function Projects() {
  return (
    <StyledContainer>
      <h1>Projects</h1>
      <StyledCardContainer>
        <StyledCard></StyledCard>
        <StyledCard></StyledCard>
      </StyledCardContainer>
      <StyledCardContainer>
        <StyledCard></StyledCard>
        <StyledCard></StyledCard>
      </StyledCardContainer>
    </StyledContainer>
  );
}
