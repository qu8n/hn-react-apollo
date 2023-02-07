import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

// Configure our ApolloClient instance to know the endpoint of our GraphQL API 
// so it can deal with the network connections.

const httpLink = createHttpLink({
  uri: 'http://localhost:4000' // location of our GraphQL API
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache() // store data from earlier requests for improved perf
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>,
  document.getElementById('root')
);
