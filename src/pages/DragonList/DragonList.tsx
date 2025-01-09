import React, { useEffect, useState } from "react";
import { getDragons, deleteDragon } from "../../services/api";
import { DragonCard } from "../../components/DragonCard/DragonCard";
import { useNavigate } from "react-router-dom";
import "./DragonList.scss";
import { ConfirmModal } from "../../components/confirmModal/ConfirmModal";

export const DragonList: React.FC = () => {
  const [dragons, setDragons] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [dragonToDelete, setDragonToDelete] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    getDragons().then((res) => {
      const sortedDragons = res.data.sort((a: any, b: any) =>
        a.name.localeCompare(b.name)
      );
      setDragons(sortedDragons);
    });
  }, []);

  const handleDelete = (id: string) => {
    setDragonToDelete(id);
    setOpenModal(true);
  };

  const confirmDelete = () => {
    if (dragonToDelete) {
      deleteDragon(dragonToDelete).then(() => {
        setDragons((prev) => prev.filter((d) => d.id !== dragonToDelete));
        setOpenModal(false);
        setDragonToDelete(null);
      });
    }
  };

  const cancelDelete = () => {
    setOpenModal(false);
    setDragonToDelete(null);
  };

  const handleEdit = (id: string) => {
    navigate(`/dragons/${id}/edit`);
  };

  const handleCreate = () => {
    navigate("/dragons/create");
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div className="dragon-list">
      <div className="buttons-container">
        <button onClick={handleCreate} className="create-dragon-button">
          Criar Dragão
        </button>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>

      <div className="cards-container">
        {dragons.map((dragon) => (
          <DragonCard
            key={dragon.id}
            name={dragon.name}
            type={dragon.type}
            createdAt={dragon.createdAt}
            onEdit={() => handleEdit(dragon.id)}
            onDelete={() => handleDelete(dragon.id)}
          />
        ))}
      </div>

      <ConfirmModal
        open={openModal}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
        title="Confirmar Exclusão"
        message="Tem certeza que deseja excluir este dragão?"
      />
    </div>
  );
};
