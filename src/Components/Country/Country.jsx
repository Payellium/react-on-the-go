import React from 'react';

const Country = ({country}) => {
    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h1>Name: {country.name.common}</h1>
            <h4>Capital: {country.capital.capital}</h4>
            <p>Region: {country.region.region}</p>
        </div>
    );
};

export default Country;