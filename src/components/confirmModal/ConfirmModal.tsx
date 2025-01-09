import React from "react";
import "./ConfirmModal.scss";

interface ConfirmModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  open,
  onClose,
  onConfirm,
  title,
  message,
}) => {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>
            Não
          </button>
          <button className="confirm-btn" onClick={onConfirm}>
            Sim
          </button>
        </div>
      </div>
    </div>
  );
};
