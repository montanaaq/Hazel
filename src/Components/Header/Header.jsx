import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

    const [userContinent, setUserContinent] = useState('');
    const [userPassangers, setUserPassangers] = useState('');
    const [userWhen, setUserWhen] = useState('');

    const handleContinentChange = (event) => {
        setUserContinent(event.target.value);
    };

    const handlePassangersChange = (event) => {
        setUserPassangers(event.target.value);
        console.log(userPassangers)
    };

    const handleWhenChange = (event) => {
        setUserWhen(event.target.value);
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      if (userContinent && userPassangers && userWhen) {
        navigate(`/cards?continent=${encodeURIComponent(userContinent)}&passengers=${encodeURIComponent(userPassangers)}&when=${encodeURIComponent(userWhen)}`);
      } else {
        alert('Please select all options');
      }
    };
  return (
    <header>
      <img className="logo" src="Logo.png" alt="логотип сайта" />
      <div className="form">
        <img src="Cheap travel!.png" alt="" />
        <form onSubmit={handleSubmit}>
          <select defaultValue={'Continent'} id="continent" name="continent" onChange={handleContinentChange}>
            <option value="">Continent</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Australia">Australia</option>
            <option value="Antarctica">Antarctica</option>
          </select>
          <select defaultValue={'Passengers'} id="passangers" name="passangers" onChange={handlePassangersChange}>
            <option value="">Passengers</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label htmlFor="when"></label>
          <input type="text" id="when" placeholder="When" onFocus={(e) => e.target.type = 'date'} onChange={handleWhenChange}/>
          <input type="submit" value="GO" className="button" id="submitButton" />
        </form>
      </div>
    </header>
  );
}

export default Header;