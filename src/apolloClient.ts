import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://movieql.netlify.app/",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;