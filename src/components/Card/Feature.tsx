import {  useState } from "react";
import { Row, Col, Card } from "antd";
import { useQuery } from "@apollo/client";

import { Loading } from "../Loading/Loading";
import { ImgCard } from "../ImgCard/index";
import { ModalDetail } from "../Modal/index";

import { ALL_PEOPLE } from "../../services/index";

export const Feature = () => {

  const { Meta } = Card;
  const [open, setOpen] = useState<boolean>(false);
  const [current, setCurrent] = useState<string>("");

  const { loading, error, data } = useQuery(ALL_PEOPLE);

  const handleClickCard = (id: string) => {
    setCurrent(id);
    setOpen(true);
    //window.location.pathname = window.location.origin + `${id}`
    window.history.pushState(null, "", id);
    console.log("modal abierto");
  };
  const closeModal = () => {
    //window.history.replaceState(null, "", null)

    setOpen(false);
    window.location.pathname = "";
  };

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
          <Loading/>
        ) : (
          <Row gutter={[16, 16]}>
            {data.allPeople.people.map((person: any, key: number) => (
              <Col key={person.id} xs={24} sm={12} md={8} lg={6} xl={6}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<ImgCard file={key} />}
                  onClick={() => handleClickCard(person.id)}
                >
                  <Meta title={person.name} />
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
      <ModalDetail open={open} close={closeModal} id={current} />
    </div>
  );
};

