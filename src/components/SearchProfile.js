import searchLogo from '../images/search-logo.svg';
import chainLogo from '../images/chain-logo.svg';
import locationLogo from '../images/location-logo.svg';
import workPlaceLogo from '../images/work-place-logo.svg';
import xLogo from '../images/x-logo.svg';
import { useEffect, useState } from 'react';
// import axios from 'axios';

function SearchProfile() {

const [searchValue, setSearchValue] = useState(null);

// const [userData, setUserData] = useState(null);
// const [error, setError] = useState(null);


// useEffect( () => {
//   const fetchData =  async () => {
//     try {
//       const response = await axios.get(`https://api.github.com/users/${searchValue}`);
//       console.log(response.data);
//       setUserData(response.data);
//       setError(null);
//     }
//     catch(error) {
//       setUserData(null);
//       setError('No results')
//     }
    
//   }

//     if(searchValue)
//       fetchData();


  
// },[searchValue])


useEffect (() => {
  fetch (`https://api.github.com/users/${searchValue}`)
  .then((res) => {
    return res.json();

  })
  .then((data) => {
    console.log(data);
  } 
)

})



  const outputValue = () => {
      console.log(searchValue);
  }

    const handleClick = () => {
        outputValue();
    }

    const handleKeyPress = (event) => {
      if(event.key === 'Enter')
          outputValue();
    }






  return (
    <div className="main-container">
      <div className="header-part">
        <h2 id="app-name">devfinder</h2>
        <div className="change-mode"></div>
      </div>

      <div className="search-box">
        <img src={searchLogo} id='search-logo' alt="search-logo"></img>
        <input id='search-input'
         type="text" 
         value={searchValue}
         onChange={(event)=> {
            setSearchValue(event.target.value);
         }}
         onKeyPress={handleKeyPress}
         placeholder="Search Github username..."
         
         />
        <button id="search-button"
        onClick={handleClick}
        > Search </button>

        <p></p>
      </div>

      <div className="user-info-box">
        <div className="intro-info-user">
          <img alt="user"></img>
          <h2 id="full-name">Patrick Bob</h2>
          <a  id="user-link" href="a">@username</a>
          <p id="joined-date">Joined 25 Jan 2011</p>
        </div>

        <p id="profile-bio">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>

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
              <img  src = {chainLogo} alt="blog-logo"></img>
              <a href="a">https://github.blog</a>
            </div>

            <div className="x">
              <img src = {xLogo} alt="x-logo"></img>
              <a href="a">twitter.com</a>
            </div>

            <div className="workPlace">
              <img src= {workPlaceLogo} alt="github"></img>
              <p id="github-name">@github</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default SearchProfile;
