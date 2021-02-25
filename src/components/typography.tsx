import styled from 'styled-components';

export const Text = styled.span`
  font-family: ${(props)=>props.theme.typography.fonts.body};
  font-size: ${(props)=>props.theme.typography.sizes.body};
`;

export const H1 = styled.h1`
  font-family: ${(props) => props.theme.typography.fonts.title};
  font-size: ${(props) => props.theme.typography.sizes.h1}
`;

export const H2 = styled.h2`
  font-family: ${(props) => props.theme.typography.fonts.title};
  font-size: ${(props) => props.theme.typography.sizes.h2}
`;

export const Paragraph = styled.p`
  font-family: ${(props) => props.theme.typography.fonts.body};
  font-size: 16px;
`;

export const A = styled.a`
  font-family: ${(props) => props.theme.typography.fonts.body};
  font-size: ${(props) => props.theme.typography.sizes.body};
  text-decoration: none;
  color: #2d4080;
`

export const LI = styled.li`
  font-family: ${(props)=>props.theme.typography.fonts.body};
  font-size: ${(props)=>props.theme.typography.sizes.body};
`;