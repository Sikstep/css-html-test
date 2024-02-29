import React from 'react';
import './App.css';
import styled from 'styled-components';
import {myTheme} from './styles/Theme';

function App() {
    return (
        <div className="App">
            <ContainerCard>
                <ImgStyled src="https://new-science.ru/wp-content/uploads/2021/01/78525-12.jpg" alt="Изображение"/>
                <HeaderStyled>Headline</HeaderStyled>
                <ParagraphStyled>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores,
                    sequi.</ParagraphStyled>
                <ButtonContainer>
                    <ButtonStyled>See more</ButtonStyled>
                    <ButtonStyled>Save</ButtonStyled>
                </ButtonContainer>
            </ContainerCard>
        </div>
    );
}

const ContainerCard = styled.div`
  height: 300px;
  width: 250px;
  border: ${myTheme.color.white};
  border-radius: 15px;
  background-color: ${myTheme.color.white};
  padding: 10px;
 
`;

const ImgStyled = styled.img`
  width: 100%;
  height: auto;
  max-height: 150px;
  object-fit: cover;
  border-radius: 15px;
`;

const HeaderStyled = styled.h1`
  font-size: 18px;
`;

const ParagraphStyled = styled.p`
  font-size: 12px;
`;

const ButtonContainer = styled.div`

`;

const ButtonStyled = styled.button`

`;

export default App;
