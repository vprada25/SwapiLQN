import { useQuery, gql } from "@apollo/client";
import { Loading } from "../components/Loading/index";
import { Layout } from "antd";
import "././App.scss";
import { Navbar } from "../components/Navbar/index";
import { Home } from '../components/Home/index';

const { Header, Footer, Content } = Layout;

const EXCHANGE_RATES = gql`
  query {
    allFilms {
      films {
        title
      }
    }
  }
`;

export const App = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  console.log(data);

  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Layout className="mainLayout">
        <Header>
          <Navbar></Navbar>
        </Header>
        <Content>
          <Home></Home>
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
  );
};
