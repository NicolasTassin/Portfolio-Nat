import styled from 'styled-components';





export const H1 = styled.h1<{ fontSize?: string, fontWeight?: string }>`
font-size: 48px;
font-style: normal;
font-weight: ${props => props.fontWeight || '400'};
`

export const H2 = styled.h2<{ fontSize?: string }>`
font-size: ${props => props.fontSize || "30px"};
font-style: normal;
font-weight: 400;
`
export const H3 = styled.h3<{ fontSize?: string, fontWeight?: string }>`
font-size: ${props => props.fontSize || '16px'};
font-style: normal;
font-weight: ${props => props.fontWeight || '400'};
line-height: 24px;
letter-spacing: 0em;
text-align: left;




`