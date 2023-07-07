import React,{useState} from 'react';
// import { useQuery } from '@apollo/client';

// import ThoughtList from '../components/ThoughtList';
// import ThoughtForm from '../components/ThoughtForm';

// import { QUERY_THOUGHTS } from '../utils/queries';

// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';


function Home() {

  return (<>
    <Container>
    <Row className="image-container">
      <Col xs={12} md={4}>
        <Image src={process.env.PUBLIC_URL + "/assets/image1.jpg" } fluid/>
 
      </Col>
      <Col xs={12} md={4}>
        <Image src={process.env.PUBLIC_URL + "/assets/image3.jpg" } fluid/>
      </Col>
      <Col xs={12} md={4}>
        <Image src={process.env.PUBLIC_URL + "/assets/image2.jpg" } fluid/>
      </Col>
    </Row>
  </Container>
   

      {/* <Row>
        <Col xs={12} md={6}>
        <Card className='signup-login'>
                <Card.Body>
          <Card.Title>Register</Card.Title>
          <Card.Text>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-5">
        <Form.Group as={Col} md="7" controlId="Custom01">
          <Form.Label></Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="7" controlId="Custom02">
          <Form.Label></Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="7" controlId="Custom03">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="email@example.com" required />
          <Form.Control.Feedback type="invalid">
            Please enter your email.
          </Form.Control.Feedback>
        </Form.Group>
 
    
        <Form.Group as={Col} md="7" controlId="Custom03">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Password" required />
          <Form.Control.Feedback type="invalid">
            Please provide a password.
          </Form.Control.Feedback>
        </Form.Group>

   
      </Row>
  
      <Button type="submit">Sign-up</Button>
    </Form>
          </Card.Text>
        </Card.Body>

        </Card>
        </Col>
        <Col xs={12} md={6}>
        <Card className='signup-login'>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Card.Text>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-5">
        <Form.Group as={Col} md="7" controlId="Custom01">
          <Form.Label>Enter Email Adress</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="email@example.com"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="7" controlId="Custom02">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Password"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>


      </Row>
      <Form.Group className="mb-3">
      </Form.Group>
      <Button type="submit">Login</Button>
    </Form>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Already have an account login here. </small>
        </Card.Footer>
        </Card>
        </Col>
      </Row> */}
   </>
  );
}

export default Home;

