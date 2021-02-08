// import React from 'react';
// import './SearchFromNav.scss';
// import axios from 'axios';

// const SearchFromNav = ({ setEvents }) => {

//     const options = ['music', 'books', 'sport', 'languages', 'other', 'online'];

//     const getOption = async (option) => {
//         try {
//             let response;
//             switch(option) {
//                 case 'online':
//                     response = await axios.get(`/events/search-events/online`);
//                     break;
//                     default:
//                     response = await axios.get(`/events/search-events/category/${option}`);
//                     break;
//             }
//             setEvents(response.data);
//         }
//         catch (error) {
//             console.log(error)
//         }      
//     };



//     return (
//         <div>
//             <div>
//                 <ul className='optionsToClick'>
//                     {options.map(option => (    
//                         <li
//                         className='optionField'
//                         onClick={() => getOption(option)}>
//                             {option}
//                         </li>
//                     ))}
//                 </ul>
                
//             </div>
import React, { useState, useEffect } from "react";
import "./SearchFromNav.scss";
import axios from "axios";
import { Link } from 'react-router-dom';

const SearchFromNav = () => {
  const [events,setEvents] = useState([]);
  const [visible, setVisible] = useState(1);
  const [changeOption, setChangeOption] = useState("");

  const options = [
    "music",
    "books",
    "sport",
    "learning languages",
    "other",
    "online",
  ];

  const getOption = async (option) => {
    try {
      console.log("12345");
      let response;
      switch (option) {
        case "online":
          response = await axios.get(`/events/search-events/online`);
          break;
        default:
          response = await axios.get(
            `/events/search-events/category/${option}/1/0`
          );
          break;
      }
      setEvents(response.data);
      setChangeOption(option);
      setVisible(1)
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async () => {
    try {
      setVisible(visible + 1);
      const response = await axios.get(
        `/events/search-events/category/${changeOption}/1/${visible}`
      );
      //   console.log(response);

      setEvents(events.concat(response.data));

      console.log(visible);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <ul className="optionsToClick">
          {options.map((option) => (
            <li className="optionField" onClick={() => getOption(option)}>
              {option}
            </li>
          ))}
        </ul>
        <div className="resultsContainer">
          <ul className="displayResults">
            {events.length ? (
              events.map((eventData) => (
                <div>
                  <li key={eventData._id}>
                    <span>{eventData.eventName}</span>    
                    <span>{`${eventData.city} - ${eventData.place}`}</span> 
                    <span>{new Date(eventData.startingDate).toDateString()}</span> 
                    <Link 
                        to={`/event/${eventData._id}`}
                        className='link'>
                            See this event
                    </Link>                          
                  </li>
                </div>
              ))
            ) : (
              <p></p>
            )}
            {events.length && <button onClick={handleClick}>See More</button>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchFromNav;
