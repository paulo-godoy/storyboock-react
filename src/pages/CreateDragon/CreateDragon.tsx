import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDragonById, createDragon, updateDragon } from "../../services/api";
import { InputField } from "../../components/inputField/InputField";
import "./CreateDragon.scss";

export const CreateDragon: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");

  useEffect(() => {
    if (id) {
      getDragonById(id)
        .then((res) => {
          const dragon = res.data;
          setName(dragon.name);
          setType(dragon.type);
        })
        .catch((error) => {
          console.error("Erro ao carregar os dados do dragão", error);
        });
    }
  }, [id]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const data = { name, type };

    if (id) {
      updateDragon(id, data)
        .then(() => {
          navigate(`/dragons/${id}`);
        })
        .catch((error) => {
          console.error("Erro ao editar o dragão", error);
        });
    } else {
      createDragon(data)
        .then(() => {
          navigate("/dragons");
        })
        .catch((error) => {
          console.error("Erro ao criar o dragão", error);
        });
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="create-dragon">
      <h2>{id ? "Editar Dragão" : "Criar Dragão"}</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <InputField
          label="Tipo"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
        <button type="submit">{id ? "Salvar" : "Criar"}</button>
      </form>
      <button className="back-button" onClick={handleGoBack}>
        Voltar
      </button>
    </div>
  );
};
