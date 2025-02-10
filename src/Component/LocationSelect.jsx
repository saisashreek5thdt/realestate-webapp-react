import { useState } from "react";

const LocationSelect = () => {
    const [selectedLocation, setSelectedLocation] = useState("Location");
    const [isOpen, setIsOpen] = useState(false);
  
    const locations = [
      "Location",
      "Texas",
      "Florida",
      "New York",
      "Illinois",
      "Washington",
      "Pennsylvania",
      "Ohio",
      "Georgia",
      "North Carolina",
    ];
  
    const handleSelect = (location) => {
      setSelectedLocation(location);
      setIsOpen(false);
    };
  
    return (
      <div
        className={`nice-select ${isOpen ? "open" : ""}`}
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="current">{selectedLocation}</span>
        {isOpen && (
          <ul className="list">
            {locations.map((location, index) => (
              <li
                key={index}
                className={`option ${selectedLocation === location ? "selected" : ""}`}
                onClick={() => handleSelect(location)}
              >
                {location}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
};

export default LocationSelect;
