import React from 'react'
import "../styles/dropdown.css";
import { useState, useEffect, useRef } from "react";


const Dropdown = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);
  
    // Toggle dropdown visibility
    const toggleDropdown = () => {
      setDropdownVisible((prev) => !prev);
    };
  
    // Close dropdown if clicked outside
    useEffect(() => {
      const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setDropdownVisible(false);
        }
      };
  
      document.addEventListener("click", handleOutsideClick);
      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }, []);
  
    return (
      <div className="dropdown-container" ref={dropdownRef}>
        <button className="menu-button" onClick={toggleDropdown}>
          ☰ Options
        </button>
        {isDropdownVisible && (
          <div className="dropdown">
            <ul>
              <li><a href="#">Login/Register</a></li>
              <li><a href="#">Notifications</a></li>
              <li><a href="#">Rewards</a></li>
              <li><a href="#">Settings</a></li>
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  export default Dropdown;