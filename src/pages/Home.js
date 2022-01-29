import React from 'react';
import Slider from "../components/slider";
import Jumbotron from "../components/jumbotron";
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import './styles.css';


const Home = () => {
  return (
    <div>
      <Slider/>
      <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
        <Row>
          <Col>
            <Card style={{width: '18rem'}}>
              <Card.Img
                src='https://cards.optimabank.kg/images/design/cards/visa-gold.png'
                variant='top'
              />
              <Card.Body>
                <Card.Title>Visa Gold </Card.Title>
                <Card.Text>
                  Став владельцем данной карты.Вы получаете не только премиальную международную карту, но и много дополнительных возможностей, которыми она обладает:Возможность открытия мультивалютной карты в четырех валютах – сом, долл., евро,рубль.
                </Card.Text>
                <Button variant='primary'>Заказать</Button>
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
                <Card.Title>МУЛЬТИВАЛЮТНАЯ КАРТА </Card.Title>
                <Card.Text>
                  Основное отличие мультивалютной  карты от обычной карты в рублях или долларах, это возможность привязки одной карты сразу к нескольким счетам в разной валюте.
                </Card.Text>
                <Button variant='primary'>Заказать</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{width: '18rem'}}>
              <Card.Img
                src='https://cards.optimabank.kg/images/design/cards/visa-infinity.png'
                variant='top'
              />
              <Card.Body>
                <Card.Title>Visa infinite </Card.Title>
                <Card.Text>
                  Философия VISA Infinite основывается на принципе «клубности». В отличие от всех остальных продуктов и услуг Банка, карта VISA Infinite открывает для своих держателей доступ в элитарный Private Banking Club, где они могут воспользоваться.
                </Card.Text>
                <Button variant='primary'>Заказать</Button>
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
                 src='https://24.kg/thumbnails/3eceb/ced54/244834_w750_h_r.png'
                 alt=""/>
          </Col>
          <Col md={5}>
            <h2>Уважаемые клиенты!</h2>
            <p>ОАО «Оптима Банк» работает в штатном режиме!

              С 10 января все подразделения обслуживают клиентов согласно графику работы отделений банка.

              Чрезвычайное положение, введенное в Республике Казахстан, напрямую или косвенно не влияет на деятельность банка. ОАО «Оптима банк» является банком № 1 в КР по всем показателям: активам, собственному капиталу, кредитам, депозитам и чистой прибыли. Общая сумма денежных средств ОАО «Оптима Банк» в наличной и безналичной форме составляет более 44 миллиардов сомов в эквиваленте.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;