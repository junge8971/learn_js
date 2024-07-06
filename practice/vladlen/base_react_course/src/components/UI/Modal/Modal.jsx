import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export const Modal = ({ children, open, ...props }) => {
  const dialogRef = useRef();
  const modalRoot = document.getElementById("modal");

  useEffect(() => {
    if (open) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialogRef} {...props}>
      {children}
    </dialog>,
    modalRoot
  );
};
