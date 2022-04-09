import React from "react";
import './Country.css'

const Country = (props) => {
//  console.log(props.country.name)
const { name, region, capital, flags } = props.country;
  return (
    <div className="country-card">
      <img className="flag" src={flags.png} alt="flag"></img> <br></br>
      <div className="country-detail">
        <h1> {name.common}</h1>
        <p>
          {" "}
          Captital: <span className="capital">{capital}</span>{" "}
        </p>
        <p>
          {" "}
          Continents: <span className="region">{region}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Country;
