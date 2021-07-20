import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';


const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Future Plans'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className="container">
            <ul>
              <li>Be added to CoinMarketCap, Coingecko, BscScan, PooCoin to track coin analytics</li>
              <li>Be listed onto Bitmart</li>
            </ul>
          </div>
          <Container>
            <Row className="mb-12">
              <Col><Image
                  src={require('./../../assets/images/bscscanorange.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} /></Col>
              <Col><Image
                  src={require('./../../assets/images/coingeckoorange.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} /></Col>
              <Col><Image
                  src={require('./../../assets/images/coinmarketcap_orange.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} /></Col>
            </Row>
          </Container>          
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;