import * as React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const PrayJumbotron = (props:any) => {
  return (
    <div>
      <Jumbotron fluid={true}>
        <Container fluid={true}>
          <h1 className="display-3">I AM PRAY.</h1>
          <p className="lead">I want to be a person who helps others.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default PrayJumbotron;