import { useQuery } from "@apollo/client";
import { Layout } from "antd";

import { Navbar } from "../components/Navbar/index";
import { Slice } from "../components/Slice/index";
import { Feature } from "../components/Card";

import { ALL_FILMS } from "../services/allFilms";

import "././App.scss";

export const App = () => {
  const { Header, Footer, Content } = Layout;
  const { loading, error, data } = useQuery(ALL_FILMS);
  console.log(data);


  return error ? <p>Error :(</p> : (
    <div>
      <Layout className="mainLayout">
        <Header>
          <Navbar></Navbar>
        </Header>
        <Content>
          <Slice/>
          <Feature/>
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
  );
};
