import styled from 'styled-components';

export type ButtonStyledPropType = {
 color?: string
 fontSize?: string
 btnType: 'primary' | 'secondary'
 active?: boolean

}
 export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const ButtonStyled = styled.button`
  border: none;
  height: 30px;
  width: 80px;
  border-radius: 5px;
  font-weight: bold;
  background-color: lightblue;
`;