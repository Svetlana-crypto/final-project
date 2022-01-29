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
          <h1>Lorem ipsum dolor sit</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </Container>
      </div>
    </div>
  </Styles>
  );
};

export default Jumbotron;