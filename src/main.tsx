import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from '@/apolloClient';

import '@/index.css'
import App from "@/App";

const client = createApolloClient();

const rootElement = document.getElementById("app") as HTMLElement;

const root = createRoot(rootElement);


root.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <App />
        </Provider>
      </ApolloProvider>
    </React.StrictMode>
);