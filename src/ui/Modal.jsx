import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
  text-align: center;

  @media (max-width: 576px) {
    padding: 1.5rem;
    max-height: 80%;
    overflow: auto;
  }

  @media (min-width: 576px) and (max-width: 768px) {
    padding: 1.5rem;
    max-height: 90%;
    overflow: auto;
    width: 75%;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    max-height: 90%;
    overflow: auto;
    width: 80%;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    max-height: 90%;
    overflow: auto;
    width: 70%;
  }

  @media (min-width: 1200px) and (max-width: 1400px) {
    max-height: 90%;
    overflow: auto;
    width: 60%;
  }

  @media (min-width: 1400px) {
    max-height: 90%;
    overflow: auto;
    width: 50%;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: fixed;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    /* background-color: var(--color-grey-100); */
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-100);
  }

  @media (max-width: 576px) {
    position: fixed;
    top: 1.2rem;
    right: 1.5rem;
    & svg {
      width: 2rem;
      height: 2rem;
    }
  }

  @media (min-width: 576px) and (max-width: 768px) {
    position: fixed;
    top: 2rem;
    right: 3rem;
    & svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

export const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = (name) => setOpenName(name);

  useEffect(() => {
    if (openName) {
      document.documentElement.classList.add("modal-open");
    } else {
      document.documentElement.classList.remove("modal-open");
    }
  });

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <Button onClick={close}>
        <HiXMark />
      </Button>
      <StyledModal ref={ref}>{children}</StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
