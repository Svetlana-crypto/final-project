import React from 'react';
import {Container} from "react-bootstrap";
import styled from "styled-components";
const Styles = styled.div`

  .jumbo{
  background: url("https://data.kaktus.media/image/big/2021-07-01_15-46-12_626689.jpg") no-repeat fixed bottom;
  background-size: cover;
  color: #000000;
  height: 400px;
  position: relative;
  z-index: -2;
  padding-top: 80px;
}
.overlay{
  background-color: #000;
  opacity: 0.6;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
}`;

const Jumbotron = () => {
  return (
  <Styles>
    <div className="jumbo">
      <div className="overlay">
        <Container>
          <h1>Оптима Банк
            @optimabank.kg  · Коммерческий банк</h1>
          <p className='jumbo-overlay'>ОАО «Оптима Банк» образован 7 мая 1992 года. Первоначально он назывался Кыргызским коммерческим банком содействия предпринимательству «Кыргызмелбизнесбанк». В 1993 году банк был переименован в Кыргызский коммерческий банк развития и реконструкции энергетики АБ «Кыргызэнергобанк». В июне 2001 года АБ "Кыргызэнергобанк" был переименован в ОАО «Энергобанк». 14 декабря 2006 года, решением внеочередного собрания акционеров ОАО «Энергобанк» был переименован в ОАО «АТФБанк – Кыргызстан». в 2010 году завершился процесс ребрендинга и банк стал называться ОАО "ЮниКредит Банк".
        </p>
        </Container>
      </div>
    </div>
  </Styles>
  );
};

export default Jumbotron;