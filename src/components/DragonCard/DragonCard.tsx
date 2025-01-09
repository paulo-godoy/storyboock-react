import React from "react";
import "./DragonCard.scss";

interface DragonCardProps {
  name: string;
  type: string;
  createdAt: string;
  onEdit: () => void;
  onDelete: () => void;
}

export const DragonCard: React.FC<DragonCardProps> = ({
  name,
  type,
  createdAt,
  onEdit,
  onDelete,
}) => {
  const displayDate =
    createdAt && !isNaN(new Date(createdAt).getTime())
      ? new Date(createdAt).toLocaleDateString()
      : new Date().toLocaleDateString();

  return (
    <div className="dragon-card">
      <h3>{name}</h3>
      <p>Tipo: {type}</p>
      <p>Data de Criação: {displayDate}</p>
      <div className="actions">
        <button onClick={onEdit}>Editar</button>
        <button onClick={onDelete}>Excluir</button>
      </div>
    </div>
  );
};
