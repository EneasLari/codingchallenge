import { useQuery } from '@apollo/client'
import { GetCountries } from '../GraphQL/Queries'
import CountryItem from './CountryItem';

function Countries() {
    const { data, loading, error } = useQuery(GetCountries);
    var style = {
        marginTop: "100px"
    }
    if (loading || error) {
        return (
            <div className="container">
                <h3 style={style} className="text-center">{error ? error.message : 'Loading...'}</h3>
            </div>

        )
    }

    return (
        <div>
            <h1 className="display-4 my-3">All Countries</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {data.countries.map(country => (
                    <CountryItem key={country.code} country={country}></CountryItem>
                ))}
            </div>
        </div>

    );
}


export default Countries