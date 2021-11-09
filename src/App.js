import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSearch } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h4>Where in the world?</h4>
        <div className="theme-switch">
          <FontAwesomeIcon icon={faMoon} />
          <span>Dark Mode</span>
        </div>
      </div>
      <div className="search">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="Search for a country" />
      </div>
      <div className="filter">
        <input type="button" value="Filter by Region" />
        {/* <input type="button">Filter by Region</input> */}
      </div>
      <div className="country-list">
        <div className="card">
          <div className="flag"></div>
          <div className="card-details">
            <h3 className="name">Germany</h3>
            <p>Population: <span>81,770,900</span></p>
            <p>Region: <span>Europe</span></p>
            <p>Capital: <span>Berlin</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
