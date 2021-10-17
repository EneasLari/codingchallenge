import React from "react";


export default function ({ country: { name, code, native, languages,continent,capital,currency,phone } }) {
    const flagSrc = "https://flagcdn.com/h240/" + code.toLowerCase() + ".png"
    const divStyle = {
        "textDecoration": "none"
    };
    const bold={
        "fontWeight":"bold"
    }
    const href="/countrywiki/"+name
    return <a style={divStyle} href={href}>
        <div className="col">
            <div className='card'>
                <img src={flagSrc} height="240" className="card-img-top" alt={name} />
                <div className='card-body'>
                    <h4 className='card-title'>{name}</h4>
                    <span style={bold}>Capital: </span>{capital}
                    <br/>
                    <span style={bold}>Continent: </span>{continent.name}
                    <br/>
                    <span style={bold}>Currency: </span>{currency}
                    <br/>
                    <span style={bold}>Phone: </span>{phone}
                    <br/>
                    <span style={bold}>Languages: </span>
                    {languages.map(lang => (<span className="card-text" key={lang.code}>{lang.name} , </span>))}
                    <br/>

                    <span className='card-text' style={bold}>Native: </span>{native}
                </div>
            </div>
        </div>
    </a>
}