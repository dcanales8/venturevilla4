import React,{useState, useEffect} from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
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
import PlaceList from '../components/Places/Places';

const client = new ApolloClient({
  uri: 'https://api.insidebnb.com:8443/v2/markets',
  cache: new InMemoryCache(),
});
const GET_MARKETS_QUERY = gql`
  query {
    markets {
      name
      country
      city
    }
  }
`;
client
  .query({
    query: GET_MARKETS_QUERY,
  })
  .then((response) => {
    const { data } = response;
    console.log(data.markets);
  })
  .catch((error) => {
    console.error(error);
  });

function Home() {
  const [listings, setListings] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://airbnb-listings.p.rapidapi.com/v2/getadmins?countrycode=IT&admin1=07&admin2=RM&admin3=058091&admin4=05809101',
          {
            headers: {
              'X-RapidAPI-Key': 'b3569df6b3mshd27a28f0f1315a1p1376d5jsn45d184e33c7f',
              'X-RapidAPI-Host': 'airbnb-listings.p.rapidapi.com',
            },
          }
        );
        const data = await response.json();
        console.log(data);
        // setListings(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
     <PlaceList/>
    </div>
  );
   }

// function Home() {

//   return (<>
//     <Container>
//     <Row className="image-container">
//       <Col xs={12} md={4}>
//         <Image src={process.env.PUBLIC_URL + "/assets/image1.jpg" } fluid/>
 
//       </Col>
//       <Col xs={12} md={4}>
//         <Image src={process.env.PUBLIC_URL + "/assets/image3.jpg" } fluid/>
//       </Col>
//       <Col xs={12} md={4}>
//         <Image src={process.env.PUBLIC_URL + "/assets/image2.jpg" } fluid/>
//       </Col>
//     </Row>
//   </Container>
  
   

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
//    </>
//   );
// }

export default Home;

