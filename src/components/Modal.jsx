import { useState, useRef } from "react";
import { useOnClickOutside } from "./useOnClickOutside";
const Modal = () => {
  const [openModal, setOpenModal] = useState(false);
  const ref = useRef();
  
  useOnClickOutside(ref, openModal, () => setOpenModal(false));
  return (
    <li className="modal">
      <button onClick={() => setOpenModal(true)}>About</button>
      {openModal && (
        <div ref={ref} className="modalContent">
          <span onClick={() => setOpenModal(false)}>X</span>
          <div>The About modal will be displayed here</div>
        </div>
      )}
    </li>
  );
};
export default Modal;