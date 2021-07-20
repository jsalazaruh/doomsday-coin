import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'F.A.Q'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <Container>
          <Row className="mb-12">
              <Col>
              <Accordion>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                  Question 1: Will Doomsday Coin be dumped on doomsday?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Answer: No, Doomsday Coin will not be dumped on Doomsday. Our aim is to have Doomsday be a long- lasting community and meme driven Crypto. There is no plans to ever dump. 
</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                  Question 2: What will happen on Doomsday?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>Answer: Doomsday will have an event that happens when the clock hits 0. As we don’t want to disclose too much information about what is happening on doomsday, doomsday will be used as a form of PR (Press Release). So with that being said….get your bunker wallet ready and stock up. 
</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                  Question 3: How do I buy doomsday coin?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>Answer: Doomsday Coin can be obtained through pancake swap with either Trust Wallet or Metamask. More technical information on how to buy Doomsday Coin is present on the “How to Buy” section of the website. 
</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                  Question 4: What blockchain is Doomsday based off of?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>Answer: Coded off the Binance BEP-20 smart chain to save you money on transactions. </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;