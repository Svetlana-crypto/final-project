import React from 'react';
import Slider from "../components/slider";
import Jumbotron from "../components/jumbotron";
import {Container, Row, Col, Card, Button} from "react-bootstrap";


const Home = () => {
  return (
    <div>
      <Slider/>
      <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
        <Row>
          <Col>
            <Card style={{width: '18rem'}}>
              <Card.Img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs7dliohN63EtNHV-QOC-CsTfDB8k794O8Hy6X42d12u6vhAuxFbLNpAVwKDtkTZARlTo&usqp=CAU'
                variant='top'
              />
              <Card.Body>
                <Card.Title>Lorem ipsum dolor </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit.
                </Card.Text>
                <Button variant='primary'>Lorem ipsum.</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{width: '18rem'}}>
              <Card.Img
                src='https://cards.optimabank.kg/images/multicurrency-card/multicurrencycard.jpg'
                variant='top'
              />
              <Card.Body>
                <Card.Title>Lorem ipsum dolor </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit.
                </Card.Text>
                <Button variant='primary'>Lorem ipsum.</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{width: '18rem'}}>
              <Card.Img
                src='https://banks.kg/storage/147/visa-gold-924.jpg'
                variant='top'
              />
              <Card.Body>
                <Card.Title>Lorem ipsum dolor </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit.
                </Card.Text>
                <Button variant='primary'>Lorem ipsum.</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Jumbotron/>
      <Container style={{paddingTop: '30px', paddingBottom: '30px'}}>
        <Row>
          <Col md={7}>
            <img className="w-100"
                 height={400}
                 src="https://3dpapa.ru/wp-content/uploads/2016/09/nikrost-soane-1.jpg"
                 alt=""/>
          </Col>
          <Col md={5}>
            <h2>Lorem ipsum dolor sit.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Alias at autem, est eveniet fugiat quia repudiandae!
              A libero numquam tempore.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;