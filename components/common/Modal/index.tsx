import styles from './modal.module.css'
import React, { ReactNode, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: ReactNode;
  width:string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children,title,width}) => {
  const modalWidth=width||'320px';
  const handleClose = () => {
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-content"]} style={{ width: modalWidth }}>
        <div className={styles["modal-title"]}>
          {title && <span>{title}</span>}
          <button onClick={handleClose}>&times;</button>
        </div>
        {children}
      </div>
    </div>
  );
};

