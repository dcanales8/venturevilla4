import React,{useState, useEffect} from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
// import { useQuery } from '@apollo/client';

// import ThoughtList from '../components/ThoughtList';
// import ThoughtForm from '../components/ThoughtForm';

// import { QUERY_THOUGHTS } from '../utils/queries';

// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
// import Row from 'react-bootstrap/Row';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Container from 'react-bootstrap/Container';
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
  // const [listings, setListings] = useState([]);


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



export default Home;

