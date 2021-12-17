import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import "./sass/main.scss";

const configValue: string | undefined = process.env.REACT_APP_URL;

const link = createHttpLink({
  uri: configValue,
});

console.log(configValue);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  credentials: "omit",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
