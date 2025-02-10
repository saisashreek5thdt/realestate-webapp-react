import { useState } from "react";

const PropertySelect = () => {
  const [selected, setSelected] = useState("Property type");
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "bungalow", label: "Bungalow" },
    { value: "apartment", label: "Apartment" },
    { value: "house", label: "House" },
    { value: "smart-home", label: "Smart Home" },
    { value: "office", label: "Office" },
    { value: "villa", label: "Villa" },
  ];

  return (
    <div
      className={`nice-select ${isOpen ? "open" : ""}`}
      tabIndex="0"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="current">{selected}</span>
      {isOpen && (
        <ul className="list">
          {options.map((option) => (
            <li
              key={option.value}
              data-value={option.value}
              className={`option ${
                selected === option.label ? "selected" : ""
              }`}
              onClick={() => setSelected(option.label)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PropertySelect;
