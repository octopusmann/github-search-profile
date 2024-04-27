import searchLogo from "../images/search-logo.svg";
import chainLogo from "../images/chain-logo.svg";
import locationLogo from "../images/location-logo.svg";
import workPlaceLogo from "../images/work-place-logo.svg";
import xLogo from "../images/x-logo.svg";
import { Suspense, useEffect, useState } from "react";
// import axios from 'axios';

function SearchProfile() {
  const [value, setValue] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="main-container">
      <div className="header-part">
        <h2 id="app-name">devfinder</h2>
        <div className="change-mode"></div>
      </div>

      <form className="search-box">
        <img src={searchLogo} id="search-logo" alt="search-logo"></img>
        <input
          id="search-input"
          type="text"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          placeholder="Search Github username..."
        />

        <button
          id="search-button"
          onClick={async (event) => {
            event.preventDefault();
            try {
              const response = await fetch(
                `https://api.github.com/users/${value}`,
                {
                  headers: {
                    "Authorization": `Bearer ${process.env.ACCESS_TOKEN}`
                  },
                }
              );
              const data = await response.json();

              if (data.message && data.documentation_url) {
                throw Error(data.message);
              }

              setData(data);
            } catch (error) {
              console.log(error.message);
            }
          }}
        >
          Search
        </button>
      </form>
        
      <div className="user-info-box">
        <div className="intro-info-user">
          <img alt="user" src={data ? data.avatar_url : ""}></img>
          <h2 id="full-name">{data ? data.name : ""}</h2>
          <a id="user-link" href="a">
            @{data ? data.login : ""}
          </a>
          <p id="joined-date">Joined 25 Jan 2011</p>
        </div>

        <p id="profile-bio">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>

        <div className="follows-result-box">
          <div className="repos-part">
            <label id="repos-label">Repos</label>
            <br />
            <h3 id="repos-count">8</h3>
          </div>

          <div className="followers-part">
            <label id="followes-label">Followers</label>
            <br />
            <h3 id="repos-count">3938</h3>
          </div>

          <div className="following-part">
            <label id="following-label"> Following</label>
            <br />
            <h3 id="9"> 9</h3>
          </div>
        </div>
        <div className="social-media-part">
          <div className="current-location">
            <img src={locationLogo} alt="location-logo"></img>
            <p id="location-name"> San Francisco</p>
          </div>

          <div className="blog-link">
            <img src={chainLogo} alt="blog-logo"></img>
            <a href="a">https://github.blog</a>
          </div>

          <div className="x">
            <img src={xLogo} alt="x-logo"></img>
            <a href="a">twitter.com</a>
          </div>

          <div className="workPlace">
            <img src={workPlaceLogo} alt="github"></img>
            <p id="github-name">@github</p>
          </div>
        </div>
      </div>
    </div>
    );
}

export default SearchProfile;
