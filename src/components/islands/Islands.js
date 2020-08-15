import React from 'react';
import {Link} from 'react-router-dom';
import { Row, Col } from 'react-bootstrap'
function Islands({islands}) {
  const list = islands.map(island => 
    <li key={island.id}> 
      <Link to={`/islands/${island.id}`}
        style={{color: '#232d47' }}> {island.name}</Link>
    </li>
  )

  return (
    <>
    <Row>
      <Col md="auto" className="column">
        <ul className="column">
          <h4>Islands</h4>
            {list}
        </ul>
      </Col>  
    </Row>
    </>
  )
}

export default Islands;