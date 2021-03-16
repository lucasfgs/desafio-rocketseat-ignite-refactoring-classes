import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { usePrevious } from "../../hooks/usePrevious";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, children, setIsOpen }: ModalProps) {
  const [modalStatus, setModalStatus] = useState(isOpen);
  const previousOpen = usePrevious(isOpen);

  useEffect(() => {
    if (previousOpen !== isOpen) {
      setModalStatus(isOpen);
    }
  }, [isOpen, previousOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "#F0F0F5",
          color: "#000000",
          borderRadius: "8px",
          width: "736px",
          border: "none",
        },
        overlay: {
          backgroundColor: "#121214e6",
        },
      }}
    >
      {children}
    </ReactModal>
  );
}

export default Modal;
