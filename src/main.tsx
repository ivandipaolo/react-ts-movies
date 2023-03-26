import React from "react";
import '@/index.css'

import { Provider } from "react-redux";
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from "@apollo/client";
import { store } from "@/redux/store";
import createApolloClient from '@/apolloClient';

import App from "@/App";

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