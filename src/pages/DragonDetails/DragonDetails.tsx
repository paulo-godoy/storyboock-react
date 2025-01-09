import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDragonById } from "../../services/api";
import { Loading } from "../../components/loading/Loading";
import "./DragonDetails.scss";

interface Dragon {
  name: string;
  type: string;
  createdAt: string;
}

export const DragonDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [dragon, setDragon] = useState<Dragon | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      getDragonById(id)
        .then((res) => setDragon(res.data))
        .catch(() => alert("Erro ao carregar o dragão."))
        .finally(() => setIsLoading(false));
    }
  }, [id]);

  if (isLoading) return <Loading />;

  if (!dragon) return <p>Dragão não encontrado.</p>;

  const handleBackClick = () => {
    navigate("/dragons");
  };

  return (
    <div className="dragon-details">
      <h1>Detalhes do Dragão</h1>
      <p>
        <strong>Nome:</strong> {dragon.name}
      </p>
      <p>
        <strong>Tipo:</strong> {dragon.type}
      </p>
      <p>
        <strong>Data de Criação:</strong>{" "}
        {new Date(dragon.createdAt).toLocaleDateString()}
      </p>
      <button onClick={handleBackClick}>Voltar para a lista de Dragões</button>
    </div>
  );
};
