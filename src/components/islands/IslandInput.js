import React, { useState } from 'react';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import {connect} from 'react-redux';
import {addIsland} from '../../actions/islandActions';


function IslandInput({history, addIsland}) {

  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addIsland({
      name: name,
      owner: owner
    })
      history.push(`/islands`)
  }

    return (
      <Container>
        <Row>
          <Col md="auto" className="column">
            <Form onSubmit={handleSubmit}>
              <h4>Create An Island</h4>
              <Form.Label size="sm" >Island Name: </Form.Label>
                <Form.Control size="sm" type='text' name="name" value={name} onChange={(e) => setName(e.target.value)} /> 
            <br />
              <Form.Label size="sm" >Owner Name: </Form.Label>
                <Form.Control size="sm" type='text' value={owner} name="owner" onChange={(e) => setOwner(e.target.value)} />
            <br />
              <Button type="submit" size="sm"> Create! </Button>
           </Form>
          </Col>
        </Row>
      </Container>
    )
  }

  const mapStateToProps = state => {
    return {
      islands: state.islandReducer.islands
    }
  }


export default connect(mapStateToProps, {addIsland})(IslandInput);