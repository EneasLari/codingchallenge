import './App.css';
import logo from './logo.png'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import Countries from './Components/Countries';
import Continents from './Components/Continents';
import WikipediaItem from './Components/WikipediaItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://countries.trevorblades.com" }),
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})


function App() {
  return (

    <ApolloProvider client={client}>
      <div className='container'>

        <img src={logo} alt="logo" style={{ width: 300, display: 'block', margin: 'auto' }} />

        <Router>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-md">
              <a className="navbar-brand" href="/">FUN WITH FLAGS</a>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li key="home" className="nav-item" >
                    <a className="nav-link active" href="/" aria-current="page">Home</a>
                  </li>
                  <li key="allcountries" className="nav-item">
                    <a className="nav-link" href="/allcountries" >All Countries</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            <Route exact path="/">
              <Continents />
            </Route>
            <Route path="/allcountries">
              <Countries />
            </Route>

            <Route path="/countrywiki/:countryname">
              <WikipediaItem/>
            </Route>
          </Switch>


        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
