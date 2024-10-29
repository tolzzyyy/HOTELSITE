import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HotelSearch = ({ locationCode }) => {
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const rapidApiKey = '67dcf515a0msh88de527a152c34ep101d82jsn2d321623dfa8';

  const fetchHotels = async () => {
    setLoading(true);
    setError(null);

    try {
      console.log('Fetching hotels for:', locationCode);

      // First, search for the destination ID based on the locationCode
      const locationResponse = await axios.get(
        'https://booking-com.p.rapidapi.com/v1/hotels/locations',
        {
          params: { name: locationCode, locale: 'en-us' },
          headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
          }
        }
      );

      if (!locationResponse.data || locationResponse.data.length === 0) {
        throw new Error('Location not found');
      }

      const destId = locationResponse.data[0].dest_id;

      // Then search hotels using the destination ID
      const response = await axios.get(
        'https://booking-com.p.rapidapi.com/v1/hotels/search',
        {
          params: {
            dest_id: destId,
            dest_type: 'city',
            checkin_date: '2024-05-01',
            checkout_date: '2024-05-02',
            adults_number: 2,
            rooms_number: 1,
            locale: 'en-us',
            currency: 'USD',
          },
          headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
          }
        }
      );

      console.log('API Response:', response.data);

      if (response.data && response.data.result) {
        setHotels(response.data.result);
      } else {
        setError('No hotels found');
      }
    } catch (err) {
      console.log('Full error:', err);
      setError(
        err.response?.data?.message || 
        err.message || 
        'Failed to fetch hotels'
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (locationCode) {
      fetchHotels();
    } else {
      setError('Please provide a location');
    }
  }, [locationCode]);

  return (
    <div>
      <h2>Hotels in {locationCode}</h2>

      {error && (
        <p style={{ color: 'red' }}>Error: {error}</p>
      )}

      {loading && (
        <p>Loading hotels...</p>
      )}

      {!loading && !error && hotels.length > 0 && (
        <div style={{ display: 'grid', gap: '20px', padding: '20px' }}>
          {hotels.map((hotel, index) => (
            <div key={index} style={{
              border: '1px solid #ddd',
              padding: '15px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ margin: '0 0 10px 0' }}>{hotel.hotel_name}</h3>
              <p style={{ margin: '5px 0' }}>{hotel.city_name}</p>
              {hotel.min_total_price && (
                <p style={{ margin: '5px 0', fontWeight: 'bold' }}>
                  Price: ${hotel.min_total_price} {hotel.currency}
                </p>
              )}
              {hotel.review_score && (
                <p style={{ margin: '5px 0' }}>
                  Rating: {hotel.review_score}/10
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {!loading && !error && hotels.length === 0 && (
        <p>No hotels found for this location</p>
      )}
    </div>
  );
};

export default HotelSearch;
