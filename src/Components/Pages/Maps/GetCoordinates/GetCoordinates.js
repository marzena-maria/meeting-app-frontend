// import React from 'react';
// import Geocode from 'react-geocode';
// import axios from 'axios';

// const apiKeys = process.env.REACT_APP_GOOGLE_MAPS_KEY;
// console.log(apiKeys);

// Geocode.setApiKey(apiKeys);
// Geocode.setRegion('de');

// // Enable or disable logs. Its optional.
// Geocode.enableDebug();

// // Get latitude & longitude from address.
// // Geocode.fromAddress("Eiffel Tower").then(
// //     response => {
// //       const { lat, lng } = response.results[0].geometry.location;
// //       console.log(lat, lng);
// //     },
// //     error => {
// //       console.error(error);
// //     }
// //   );

// const url = `https://maps.googleapis.com/maps/api/geocode/json?address=Anfield%20Rd,%20Anfield,%20Liverpool%20L4%200TH,%20United%20Kingdom&key=${apiKeys}`;

// const GetCoordinates = () => {

//     const coordinates = async () => {
//         try {
//         const response = await axios(url);
//         console.log(response.data);
//         }
//         catch(error) {
//         console.log(error)
//         }
//     };
//     coordinates();

//     return (
//         <div>
//             <p>Ja pierdolę</p>
//         </div>
//     )
// };

// export default GetCoordinates;