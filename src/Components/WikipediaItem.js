
import React, { useState, useEffect } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { useParams } from 'react-router-dom'


export default function () {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([])
    var url = "https://en.wikipedia.org/w/api.php";

    let { countryname } = useParams()
    var params = {
        action: 'parse',
        page: countryname,
        format: "json",
    };
    url = url + '?origin=*';
    Object.keys(params).forEach((key) => {
        url += "&" + key + "=" + params[key];
    });


    
    
    useEffect(() => {
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(
                (response) => {
                    setIsLoaded(true);
                    setItems(response.parse.text["*"]);

                }, (error => {
                    setIsLoaded(true);
                    setError(error);
                })
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <h1 className="display-4 my-3">{countryname}</h1>
                 <div> { ReactHtmlParser (items) } </div>
            </div>
        );
    }
}