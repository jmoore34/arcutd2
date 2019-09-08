import styled from 'styled-components';


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