import styled from 'styled-components';

interface SectionProps {
    readonly odd?: boolean // Whether this is the 1st/3rd/etc section in a row
}

export const Section = styled.div<SectionProps>`
    background-color: ${(props) => props.odd ? props.theme.color.bg.primary : props.theme.color.bg.secondary};
    padding: 60px 300px;
`;