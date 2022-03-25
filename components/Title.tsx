import React, { useState, useEffect } from "react";
import Styled from "styled-components";

const StyledContainer = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 450px;
    flex-direction: column;
    
`;

const StyledH1 = Styled.h1`
    font-weight: 400;
    line-height: 45.25px;
    `;

    const StyledAnimationContainer = Styled.div`
    display: flex;
    `;

const StyledH3 = Styled.h3`
    font-weight: 400, regular;
    font-size: 14px;
    color: #ACACAC;
    margin: 5px auto;
    ;
    `;
const StyledAnimatedH3 = Styled(StyledH3)`
    margin-left: 10px;
    color: #000;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    background-color: #E5FE9E;
    }
    `;

const StyledButton = Styled.button`
    width: 115px;
    height: 35px;
    border-radius: 10px;
    background-color: white;
    border: 1px solid #7C7C7C;
    margin: 20px auto;
    transition: all 300ms ease;

    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    :hover {
        background-color: #E5FE9E;
    }
`;

export default function Title() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  const words = ["UX Designer","UI Designer","Product Designer"];
  const title = "Hello! I'm Sasiya";
  const subtitle = "I'm a   ";
  const subtitle2 = "I love fun UI, collaboration and solving problem";
//https://levelup.gitconnected.com/typing-effect-in-react-56697def0473
  useEffect(() => {
    if (index === words.length - 1 && subIndex === words[index].length) {
      return;
    }

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
      //@ts-ignore
    }, Math.max(reverse ? 100 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
//   useEffect(() => {
//     const timeout2 = setTimeout(() => {
//       setBlink((prev) => !prev);
//     }, 500);
//     return () => clearTimeout(timeout2);
//   }, [blink]);
  return (
    <StyledContainer>
      <StyledH1>{title}</StyledH1>
      <StyledAnimationContainer>
      <StyledH3>{subtitle}</StyledH3>
      <StyledAnimatedH3>{`${words[index].substring(0, subIndex)}`}</StyledAnimatedH3>
      </StyledAnimationContainer>
      <StyledH3>{subtitle2}</StyledH3>
      <StyledButton>READ MORE</StyledButton>
    </StyledContainer>
    
  );
}
