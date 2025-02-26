import React from "react";
import style from "./styles.module.scss";
import type { IMoleculesModalProps } from "./MoleculesModal.types";

const MoleculesModal: React.FC<IMoleculesModalProps> = ({
  isOpen,
  title,
  children,
  onSave,
  onCancel,
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onCancel();
    }
  };

  return (
    <div className={style.modalOverlay} onClick={handleOverlayClick}>
      <div className={style.modalContainer}>
        <div className={style.modalHeader}>
          <h2>{title}</h2>
        </div>
        <div className={style.modalContent}>{children}</div>
        <div className={style.modalFooter}>
          <button className={style.cancel} onClick={onCancel}>
            Cancelar
          </button>
          <button className={style.save} onClick={onSave}>
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoleculesModal;
