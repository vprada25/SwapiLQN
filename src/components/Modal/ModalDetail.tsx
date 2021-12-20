/* import { gql, useQuery } from "@apollo/client"; */
import { Modal, Tag } from "antd";

/* import { useEffect, useState } from "react"; */

type propsModal = {
  id: string;
  open: boolean;
  close: any;
  person: any;
};

export const ModalDetail = ({ id, open, close, person }: propsModal) => {
  /* const ONE_PERSON = gql`
    query {
      onePerson(id: "${id}") {
        name
        height
        mass
        hair_color
      }
    }
  `;

  const { loading, error, data } = useQuery(ONE_PERSON);
  console.log(data); */

  return (
    <Modal title={id} visible={open} onOk={close} onCancel={close}>
      <p>Nombre: <Tag color="green">{person}</Tag></p>
    </Modal>
  );
};
