import React, { ReactNode } from "react";
import "./Modal.css";

interface HeaderProps {
  initialHeading?: string;
  mainHeading?: string;
}

export const Header: React.FC<HeaderProps> = ({
  initialHeading,
  mainHeading,
}) => {
  return (
    <div className="text-center flex flex-col gap-1">
      {initialHeading && (
        <p className="text-sm text-gray-500">{initialHeading}</p>
      )}
      <h2 className="text-lg font-bold text-gray-100">{mainHeading || "Modal Header"}</h2>
    </div>
  );
};

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  header?: ReactNode;
  children?: ReactNode;
  logo?: boolean; // can be made configurable to directly pass the icon later.
}
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, header, children, logo }) => {

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 backdrop-blur-sm flex flex-col items-center justify-center gap-10 bg-black bg-opacity-60 z-50 ${isOpen ? 'show' : 'hide'}`}>
      {
        logo && 
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.53118 10.6665C5.53118 7.83026 7.83042 5.53102 10.6667 5.53102C13.5029 5.53102 15.8022 7.83026 15.8022 10.6665C15.8022 13.5028 13.5029 15.802 10.6667 15.802C7.83042 15.802 5.53118 13.5028 5.53118 10.6665ZM10.6667 3.53102C6.72585 3.53102 3.53118 6.72569 3.53118 10.6665C3.53118 14.6073 6.72585 17.802 10.6667 17.802C14.6075 17.802 17.8022 14.6073 17.8022 10.6665C17.8022 6.72569 14.6075 3.53102 10.6667 3.53102ZM15.934 29.3336L6.46659 34.5709V24.0963L15.934 29.3336ZM6.32166 21.7305C5.48854 21.2696 4.46659 21.8722 4.46659 22.8243L4.46659 35.8429C4.46659 36.795 5.48854 37.3976 6.32166 36.9367L18.0885 30.4274C18.9484 29.9517 18.9484 28.7155 18.0885 28.2398L6.32166 21.7305ZM22.3333 23.5834C22.3333 22.893 22.893 22.3334 23.5833 22.3334H35.0833C35.7737 22.3334 36.3333 22.893 36.3333 23.5834V35.0834C36.3333 35.7737 35.7737 36.3334 35.0833 36.3334H23.5833C22.893 36.3334 22.3333 35.7737 22.3333 35.0834V23.5834ZM24.3333 24.3334V34.3334H34.3333V24.3334H24.3333ZM35.7071 5.70684C36.0976 5.31631 36.0976 4.68315 35.7071 4.29263C35.3166 3.9021 34.6834 3.9021 34.2929 4.29263L29.3333 9.25222L24.3738 4.29269C23.9832 3.90217 23.3501 3.90217 22.9596 4.29269C22.569 4.68322 22.569 5.31638 22.9596 5.70691L27.9191 10.6664L22.9596 15.626C22.569 16.0165 22.569 16.6496 22.9596 17.0402C23.3501 17.4307 23.9832 17.4307 24.3738 17.0402L29.3333 12.0806L34.2929 17.0402C34.6834 17.4308 35.3166 17.4308 35.7071 17.0402C36.0976 16.6497 36.0976 16.0166 35.7071 15.626L30.7475 10.6664L35.7071 5.70684Z"
          fill="#C5C7CA"
        />
      </svg>
      }
      <div className="relative bg-neutral-800 text-white p-4 py-10 rounded-lg border-2 border-gray-400 w-full max-w-md mx-auto flex flex-col gap-5">
        {onClose && (
          <button
            className="absolute top-3 right-2 text-white px-2 py-0 rounded-full bg-neutral-900 self-center"
            onClick={onClose}
          >
            &times;
          </button>
        )}
        <div className="mb-5">{header}</div>
        <div className="modal-content w-full">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
