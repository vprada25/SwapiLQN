import { Layout } from "antd";

import { Navbar } from "../components/Navbar/index";
import { Slice } from "../components/Slice/index";
import { Feature } from "../components/Card";


import "././App.scss";

export const App = () => {
  const { Header, Footer, Content } = Layout;
 
  return  (
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
