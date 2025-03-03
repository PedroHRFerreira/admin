import React from "react";
import style from "./styles.module.scss";
import type { IMoleculesModalProps } from "./MoleculesModal.types";

const MoleculesModal: React.FC<IMoleculesModalProps> = ({
  isOpen,
  title,
  children,
  loading,
  error,
  onSave,
  onCancel,
  textSave = "Salvar",
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onCancel();
    }
  };

  return (
    <div
      className={`${style.modalOverlay} ${loading || error ? "loading" : ""}`}
      onClick={handleOverlayClick}
    >
      {loading && <div className="anim-loading"></div>}
      {!loading && (
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
              {textSave}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoleculesModal;
