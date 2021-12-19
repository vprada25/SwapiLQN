import { Row, Col, Card } from "antd";

import { Loading } from "../Loading/Loading";
import { ALL_PEOPLE } from "../../services/allPeople";
import { useQuery } from "@apollo/client";

const { Meta } = Card;

export const Feature = () => {
  const { loading, error, data } = useQuery(ALL_PEOPLE);

  
  if (error) return <p>Error :(</p>;

  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Personajes</h2>
          <p>
            “Ningún campo de energía mística controla mi destino. Todo eso no
            son más que leyendas y tonterías”, Han Solo.
          </p>
        </div>
        {loading ? (
          <Loading></Loading>
        ) : (
          <Row gutter={[16, 16]}>
            {data.allPeople.people.map((person: any) => (
              <Col key={person.id} xs={24} sm={12} md={8} lg={6} xl={6}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src="" />}
                >
                  <Meta title={person.name} description={person.id} />
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};
