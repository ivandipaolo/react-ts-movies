import React from 'react';
import App from "./App";

import { createRoot } from 'react-dom/client';

import { ApolloProvider } from "@apollo/client";
import createApolloClient from '@/apolloClient';
import { Provider } from "react-redux";
import { store } from "./app/store";

const client = createApolloClient();

const rootElement = document.getElementById("app");
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(rootElement!);


root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);