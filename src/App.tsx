import { useQuery, gql } from "@apollo/client";
import { Loading } from "./components/Loading";
const EXCHANGE_RATES = gql`
  query {
    allFilms {
      films {
        title
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  console.log(data);

  if (error) return <p>Error :(</p>;
  if (loading) return <Loading></Loading>;

  return (
    <div>
      {data.allFilms.films.map((film: any) => (
        <div key={film.title}>
          <h2>{film.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
