import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Worlds = (props) => {
    return (
        <div>
<CardGroup>
  <Card>
    <Card.Body className = "bg-primary">
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </CardGroup>
        </div>
    );
};

export default Worlds;