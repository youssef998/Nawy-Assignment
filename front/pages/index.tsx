import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddApartmentModal from '../components/AddApartmentModal';
import Apartment from '@/components/Apartment';
import Link from 'next/link';
import { Button, Card } from 'react-bootstrap';
import '../style.css';

/**
 * Home Component represents the main page displaying a list of apartments.
 * @component
 */
const Home: React.FC = () => {
  /**
   * State to store the list of apartments fetched from the server.
   */
  const [apartments, setApartments] = useState<Apartment[]>([]);

  /**
   * State to manage the visibility of the "Add Apartment" modal.
   */
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * Opens the "Add Apartment" modal.
   */
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  /**
   * Closes the "Add Apartment" modal.
   */
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  /**
   * Handles the addition of a new apartment.
   * @param {Apartment} newApartment - The new apartment to be added.
   */
  const handleAddApartment = async (newApartment: Apartment) => {
    console.log('Adding an apartment...');
    setApartments((prevApartments) => [...prevApartments, newApartment]);

    // Close the modal
    handleCloseModal();
  };

  /**
   * Fetches the initial list of apartments from the server when the component mounts.
   */
  useEffect(() => {
    fetchApartments();
  }, []);

  /**
   * Fetches the list of apartments from the server.
   */
  const fetchApartments = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/apartments');
      setApartments(response.data.apartments);
    } catch (error) {
      console.error('Error fetching apartments:', error);
    }
  };

  /**
   * Renders the Home component.
   */
  return (
    <div className="apartment-listing">
      <h1 className="apartment-listing-title">Apartment Listing</h1>
      <Button variant="primary" onClick={handleOpenModal} className="add-apartment-btn">
        Add a New Apartment
      </Button>
      <AddApartmentModal isOpen={isModalOpen} onRequestClose={handleCloseModal} onAddApartment={handleAddApartment} />

      <div className="row mt-4">
        {apartments.map((apartment) => (
          <div key={apartment._id} className="col-md-4 mb-3">
            <Card>
              {apartment.images && apartment.images.length > 0 && (
                <Card.Img variant="top" src={apartment.images[0]} alt={apartment.name} />
              )}
              <Card.Body>
                <Card.Title>{apartment.name}</Card.Title>
                {apartment.propertyType && <p>Property Type: {apartment.propertyType}</p>}
                {apartment.price && <p>Price: {apartment.price.toLocaleString('en-US')} EGP</p>}
                {apartment.compound && <p>Compound: {apartment.compound}</p>}
                <Link href={`/${apartment._id}`}>View Details</Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
