import styled from 'styled-components';



export const globalStyles = {
    globalGrid: '10% 1fr 10%',
}


export const H1 = styled.h1<{ fontSize?: string, fontWeight?: string, margin?:string }>`
font-size: 48px;
font-style: normal;
font-weight: ${props => props.fontWeight || '400'};
margin: ${props => props.margin };
`

export const H2 = styled.h2<{ fontSize?: string, fontWeight?: string, margin?:string, marginLeft?:string }>`
font-size: ${props => props.fontSize || "30px"};
font-style: normal;
font-weight: ${props => props.fontWeight || '400'};
margin: ${props => props.margin };
margin-left: ${props => props.marginLeft };

`
export const H3 = styled.h3<{ fontSize?: string, fontWeight?: string, margin?:string }>`
font-size: ${props => props.fontSize || '16px'};
font-style: normal;
font-weight: ${props => props.fontWeight || '400'};
line-height: ${props => props.fontSize || '24px'};
letter-spacing: 0em;
text-align: left;
margin: ${props => props.margin };
`


export const P = styled.p<{ fontSize?: string, fontWeight?: string, margin?:string }>`
font-size: ${props => props.fontSize || '16px'};
font-style: normal;
font-weight: ${props => props.fontWeight || '300'};
line-height: 24px;
margin: ${props => props.margin };
`