import { useQuery, gql } from "@apollo/client";
import { Layout } from "antd";
import "././App.scss";
import { Navbar } from "../components/Navbar/index";
import { Home } from '../components/Home/index';
import { Feature } from "../components/Card";
import { ALL_FILMS } from "../services/allFilms";

const { Header, Footer, Content } = Layout;



export const App = () => {
  const { loading, error, data } = useQuery(ALL_FILMS);
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
          <Feature></Feature>
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
  );
};
