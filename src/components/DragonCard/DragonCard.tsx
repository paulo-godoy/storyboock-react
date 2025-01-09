import React from "react";
import "./DragonCard.scss";
import moment from "moment";

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
    createdAt && moment(createdAt, moment.ISO_8601, true).isValid()
      ? moment(createdAt).local().format("DD/MM/YYYY")
      : "Data inválida";

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
