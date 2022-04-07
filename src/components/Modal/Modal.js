import "./Modal.scss";
import Modal from "react-modal";

Modal.setAppElement("body");

function ModalMenu({ modalIsOpen, closeModal }) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-menu__overlay"
        className="modal-menu"
      >
        <button
          className="modal-menu__close-button button"
          onClick={closeModal}
        ></button>
        <nav></nav>
      </Modal>
    </div>
  );
}

export default ModalMenu;
