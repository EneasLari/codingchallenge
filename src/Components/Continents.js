import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GetContinents } from '../GraphQL/Queries'
import CountryItem from './CountryItem';
import ls from 'local-storage'

function Continents() {
    const [continent, setContinent] = useState(ls.get('selectedContinent') || "AF");

    var i = 0

    const { data, loading, error } = useQuery(GetContinents);

    const [countries, setCountries] = useState([]);


    var style = {
        marginTop: "100px"
    }

    useEffect(() => {
        if (data) {
            setCountries(data.continents.find(o => o.code === continent).countries)
            ls.set('selectedContinent', continent)
        }
    })

    if (loading || error) {
        return (
            <div className="container">
                <h3 style={style} className="text-center">{error ? error.message : 'Loading...'}</h3>
            </div>

        )
    }


    const divStyle = {
        fontSize: "24px",
        borderRadius: "10px",
        color: "black",
    };
    return (
        <div>
            <h1 className="display-4 my-3">All Countries of</h1>
            <select className="form-select form-select-lg mb-3 text-center" style={divStyle} value={continent} onChange={event => {
                setContinent(event.target.value)
            }}>
                {data.continents.map(continent => (
                    <option key={continent.code} value={continent.code}>
                        {continent.name}
                    </option>
                ))}
                
            </select>
            <div className="row row-cols-1 row-cols-md-3 g-4" style={style}>

                {
                    countries.map(country => (<CountryItem key={country.code} country={country}></CountryItem>))
                }

            </div>
        </div>
    )

}


export default Continents