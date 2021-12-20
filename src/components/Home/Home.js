import "./Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../shared/Header/Header";

function Home() {
  const [countries, setCountries] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://restcountries.com/v2/all?fields=name,capital,population,region,flag"
    )
      .then((resp) => resp.json())
      .then((resp) => {
        setCountries(resp);
      });
  }, []);

  return (
    <div className="Home">
      <Header></Header>
      <div className="search">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="Search for a country... " />
      </div>
      <div className="filter">
        <input type="button" value="Filter by Region" />
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div className="country-list">
        {countries.length > 0 &&
          countries.map((c) => (
            <div
              className="card"
              key={c.name}
              onClick={() => {
                navigate("/details");
              }}
            >
              <img src={c.flag} alt={c.name} />
              <div className="card-details">
                <h3 className="name">{c.name}</h3>
                <p>
                  Population: <span>{c.population}</span>
                </p>
                <p>
                  Region: <span>{c.region}</span>
                </p>
                <p>
                  Capital: <span>{c.capital}</span>
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
