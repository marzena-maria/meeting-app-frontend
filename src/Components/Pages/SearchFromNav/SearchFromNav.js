import React, { useState, useEffect } from "react";
import "./SearchFromNav.scss";
import axios from "axios";

const SearchFromNav = ({ events, setEvents }) => {
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
                    <p>{eventData.eventName}</p>
                    <p>{eventData.startingDate}</p>
                    <p>{eventData.category}</p>
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
