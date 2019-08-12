import styled from 'styled-components';

const defaultColor = "#ffffff"

export const Button =  styled.div<{color?: string}>`
  border: 1px solid;
  border-color: ${(props) => props.color || defaultColor}
  border-radius: 100px;
  padding: 5px 20px;
  margin: 15px;
  text-align: center;
  cursor: pointer;
  pointer-events: auto;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  & {
    color: ${(props) => props.color || defaultColor};
    flex: 0 1 auto;
    font-size: 30px;
    font-family: ${(props) => props.theme.typography.fonts.title}; 
  } 
  
  &:hover {
    background-color: rgba(101, 195, 70, 0.54)
  }
  transition: all 0.2s;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
`;