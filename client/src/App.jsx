import { Outlet } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import ArrowUp from './components/ArrowUp/ArrowUp';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  split,
} from '@apollo/client';
// import { createUploadLink } from 'apollo-upload-client';
// import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import { setContext } from '@apollo/client/link/context';
import CartProvider from './context/CartContext';
import './App.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// const uploadLink = createUploadLink({
//   uri: `http://localhost:3000/`
// });

const authLink = setContext((_, { headers }) => {

  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  // uploadLink

  cache: new InMemoryCache(),
});

function App() {
  const [flip, setFlip] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    // reverse: flip,
    delay: 1400,
    onRest: () => setFlip(flip),
    // onRest: () => setFlip(!flip),
  });
  return (
    <>
      <ApolloProvider client={client}>
        <CartProvider>
          <animated.div style={props}>
            <Header />
            <Outlet />
            <Footer />
            <Footer2 />
            <ArrowUp />
          </animated.div>
        </CartProvider>
      </ApolloProvider>
    </>
  )
}

export default App
