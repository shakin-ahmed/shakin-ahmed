const placesReducer = (state = [], action) => {
    switch (action.type) {
      case 'GET_PLACES_FULFILLED':
       
        return action.payload.data.predictions;
      default:
        return state;
    }
  };
  
  export default placesReducer;
  