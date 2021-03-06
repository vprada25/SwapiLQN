import {ReactNode} from 'react'
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";

const configValue: string | undefined = process.env.REACT_APP_URL;

const link = createHttpLink({
  uri: configValue,
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  credentials: "omit",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

type Props = {
  children: ReactNode;
};

export function GraphqlClient({ children }: Props) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
