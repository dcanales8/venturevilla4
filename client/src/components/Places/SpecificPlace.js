import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import places from '../../Place';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

export default function SpecificPlace() {
  const params = useParams();
  const place = places.find((item) => item.id === parseInt(params.id));

  const [numPeople, setNumPeople] = useState(1);
  const [bookingConfirmation, setBookingConfirmation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNumPeopleChange = (event) => {
    setNumPeople(parseInt(event.target.value));
    setBookingConfirmation('');
    setErrorMessage('');
  };

  const handleBookNow = () => {
    if (numPeople > place.maxGuests) {
      setErrorMessage('Sorry, the selected number of people exceeds the maximum occupancy.');
      return;
    }

    // Perform any necessary booking actions using the selected number of people
    console.log(`Booking ${numPeople} people for place: ${place.title}`);

    // Display confirmation message
    const confirmationMessage = `You have successfully booked ${numPeople} ${
      numPeople === 1 ? 'person' : 'people'
    } for ${place.title}.`;
    setBookingConfirmation(confirmationMessage);
  };

  return (
    <div>
      <h2>{place.title}</h2>
      <p className="text-muted">{place.owner}</p>
      <p className="text-muted">{place.address}</p>
      <img src={place.photos} alt="Place" className="mb-3" />

      <p className="mb-2"><strong>Perks:</strong></p>
      <ul className="mb-4">
        {place.perks.map((perk) => (
          <li key={perk}>{perk}</li>
        ))}
      </ul>

      <p className="mb-2"><strong>Check-in:</strong> {place.checkIn}</p>
      <p className="mb-2"><strong>Check-out:</strong> {place.checkOut}</p>
      <p className="mb-4"><strong>Max Guests:</strong> {place.maxGuests}</p>

      <Form>
        <Form.Group controlId="numPeople">
          <Form.Label className="mb-2"><strong>Number of People:</strong></Form.Label>
          <Form.Control
            type="number"
            value={numPeople}
            onChange={handleNumPeopleChange}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleBookNow}>
          Book Now
        </Button>
      </Form>

      {errorMessage && <Alert variant="danger" className="mt-4">{errorMessage}</Alert>}
      {bookingConfirmation && <Alert variant="success" className="mt-4">{bookingConfirmation}</Alert>}
    </div>
  );
}
