import Modal from "antd/lib/modal/Modal";
import { useEffect } from "react";

type propsModal = {
  id: string;
  open: boolean;
  close: any;
};

export const ModalDetail = ({ id, open, close }: propsModal) => {
  useEffect(() => {
    //llamada api
  }, []);
  return (
    <Modal visible={open} onOk={close} onCancel={close}>
      <p>{id}</p>
    </Modal>
  );
};
