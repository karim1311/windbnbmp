{
  /* archivo Nav.jsx dentro de carpeta components dentro de carpeta nav dentro de src */
}
import logo from "../../img/logo.png";
import React, { useState } from "react";
import "../nav/nav.css";
import { useEffect } from "react";

export default function Nav( { onSearch } ) {
  const [showLocations, setShowLocations] = useState(false);
  const [showGuests, setShowGuests] = useState(false);
  const [countChildren, setCountChildren] = useState(0);
  const [countAdults, setCountAdults] = useState(0);
  const [inputLocation, setInputLocation] = useState("Helsinki, Finland");


  const handleSearchClick = () => {
    const filters = {
      location: inputLocation,
      guests: countAdults + countChildren
    };
    onSearch(filters);
  };

  const incrementAdults = () => {
    setCountAdults(countAdults + 1);
  };

  const decrementAdults = () => {
    setCountAdults(countAdults - 1);
  };

  const incrementChildren = () => {
    setCountChildren(countChildren + 1);
  };

  const decrementChildren = () => {
    setCountChildren(countChildren - 1);
  };

  const handleLocationClick = (location) => {
    setInputLocation(location);
    setShowLocations(true);
    setShowGuests(false);
  };

  const handleGuestsClick = () => {
    setShowGuests(!showGuests);
    setShowLocations(false);
  };

 
  return (
    <div className="container-lg muli">
      <div className="container">
        <img src={logo} width="96" height="19" alt="logo" />
      </div>

      <div className="d-flex justify-content-end">
        <button
          className="boton"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasTop"
          aria-controls="offcanvasTop"
          onClick={()=> setShowLocations(!showLocations)}
        >
          <p className="botonsito bl">
            {inputLocation}
          </p>
          <p className="botonsito gr" onClick={handleGuestsClick}>
            Guests
          </p>
          <p className="obj">
            <span className="material-symbols-outlined or">search</span>
          </p>
        </button>

        <div
          className="offcanvas offcanvas-top"
          tabIndex="-1"
          id="offcanvasTop"
          aria-labelledby="offcanvasTopLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div className="container text-center">
              <div className="row border guest-loc-bar">
                <div className={`col d-flex flex-column align-items-start border-end ${showLocations ? 'btn-selected' : ''} rounded-4 h-100`} onClick={()=> handleLocationClick("")}>
                  <label className="label">LOCATION</label>
                  <input value={inputLocation} disabled></input>
                </div>
                <div
                  className={`col d-flex flex-column align-items-start border-end ${showGuests ? 'btn-selected' : ''} rounded-4 h-100 h-80%`}
                  onClick={handleGuestsClick}
                >
                  <label className="label">GUESTS</label>
                  <p>Add guests</p>
                </div>
                <div className="col d-flex justify-content-center">
                  <button className="search-btn" onClick={handleSearchClick}>
                    <span className="material-symbols-outlined">search</span>
                    Search
                  </button>
                </div>
              </div>
              <div className="d-flex container flex-column overflow-auto">
                {showLocations && (
                  <div className="d-flex align-items-start flex-column">
                    <p onClick={()=> handleLocationClick("Helsinki")}>
                      <span className="material-symbols-outlined">
                        location_on
                      </span>
                      Helsinki, Finland
                    </p>
                    <p onClick={()=> handleLocationClick("Turku")}>
                      <span className="material-symbols-outlined">
                        location_on
                      </span>
                      Turku, Finland
                    </p>
                    <p onClick={()=> handleLocationClick("Oulu")}>
                      <span className="material-symbols-outlined">
                        location_on
                      </span>
                      Oulu, Finland
                    </p>
                    <p onClick={()=> handleLocationClick("Vaasa")}>
                      <span className="material-symbols-outlined">
                        location_on
                      </span>
                      Vaasa, Finland
                    </p>
                  </div>
                )}

                {showGuests && (
                  <div className="d-flex flex-column  w-50 justify-content-center text-guests">
                    <div className="d-flex justify-content-center flex-column">
                      <div className="d-flex align-items-start flex-column">
                        <p className="d-flex align-items-start flex-column">
                        Adults
                        <label className="label">Ages 13 or above</label>
                        </p>
                        
                      </div>
                      <div className="d-flex">
                        <button className="bg-light border-light h-50 w-100" onClick={decrementAdults}>-</button>
                        <p>{countAdults}</p>
                        <button className="bg-light border-light w-50 h-50 rounded-2" onClick={incrementAdults}>+</button>
                      </div>
                    </div>
                    <div className="d-flex flex-column">
                      <div className="d-flex flex-column">
                        <p className="d-flex">Children</p>
                        <label>Ages 2-12</label>
                      </div>
                      <div className="d-flex contador">
                        <button onClick={decrementChildren}>-</button>
                        <p>{countChildren}</p>
                        <button onClick={incrementChildren}>+</button>
                      </div>
                    </div>
                    
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
