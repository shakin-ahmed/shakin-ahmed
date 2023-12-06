import axios from 'axios';

export const getPlaces = (query) => {
  const apiKey = '  https://www.google.com/maps/embed/v1/MAP_MODE?key=YOUR_API_KEY&parameters';
  const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${apiKey}`;

  const request = axios.get(apiUrl);

  return {
    type: 'GET_PLACES',
    payload: request,
  };
};
