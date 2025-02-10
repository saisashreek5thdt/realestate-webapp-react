import { useState } from "react";

const FilterForm = () => {
  const [selectedState, setSelectedState] = useState("Texas");
  const [selectedRooms, setSelectedRooms] = useState("2");
  const [selectedBaths, setSelectedBaths] = useState("Any");
  const [selectedBeds, setSelectedBeds] = useState("Any");
  const [amenities, setAmenities] = useState({});

  const states = [
    "California", "Texas", "Florida", "New York", "Illinois", 
    "Washington", "Pennsylvania", "Ohio", "Georgia", "North Carolina"
  ];
  
  const roomOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const bathOptions = ["Any", 1, 2, 3, 4];
  const bedOptions = ["Any", 1, 2, 3, 4, 5, 6];

  const amenityOptions = [
    "Bed linens", "Carbon alarm", "Check-in lockbox", "Coffee maker", 
    "Dishwasher", "Fireplace", "Extra pillows", "First aid kit", 
    "Hangers", "Iron", "Microwave", "Refrigerator", 
    "Security cameras", "Smoke alarm"
  ];

  const toggleAmenity = (amenity) => {
    setAmenities((prev) => ({ ...prev, [amenity]: !prev[amenity] }));
  };

  return (
    <div className="filter-component">
      <button className="btn-filter show-form">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 4H14" stroke="#F1913D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 4H3" stroke="#F1913D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 12H12" stroke="#F1913D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 12H3" stroke="#F1913D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 20H16" stroke="#F1913D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 20H3" stroke="#F1913D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 2V6" stroke="#F1913D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 10V14" stroke="#F1913D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 18V22" stroke="#F1913D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="wd-search-form" style={{ marginTop: "10px" }}>
        <div className="group-select" style={{ marginBottom: "10px" }}>
          <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
            {states.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          
          <select value={selectedRooms} onChange={(e) => setSelectedRooms(e.target.value)}>
            {roomOptions.map((room) => (
              <option key={room} value={room}>{room}</option>
            ))}
          </select>
          
          <select value={selectedBaths} onChange={(e) => setSelectedBaths(e.target.value)}>
            {bathOptions.map((bath) => (
              <option key={bath} value={bath}>{bath}</option>
            ))}
          </select>
          
          <select value={selectedBeds} onChange={(e) => setSelectedBeds(e.target.value)}>
            {bedOptions.map((bed) => (
              <option key={bed} value={bed}>{bed}</option>
            ))}
          </select>
        </div>

        <div className="group-checkbox" style={{ marginTop: "10px" }}>
          <h4>Amenities:</h4>
          {amenityOptions.map((amenity) => (
            <label key={amenity} style={{ display: "block" }}>
              <input 
                type="checkbox" 
                checked={!!amenities[amenity]} 
                onChange={() => toggleAmenity(amenity)} 
              />
              {amenity}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterForm;
