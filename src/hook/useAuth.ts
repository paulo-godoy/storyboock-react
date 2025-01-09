import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDragons } from "../services/api";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const login = async (username: string, password: string) => {
    setLoading(true);

    if (username === "admin" && password === "12qwaszx@12") {
      localStorage.setItem("user", "logged");
      setIsAuthenticated(true);

      try {
        await getDragons();
        setLoading(false);
        navigate("/dragons");
      } catch (error) {
        setLoading(false);
        alert("Erro ao carregar os dragões.");
      }
    } else {
      setLoading(false);
      alert("Credenciais inválidas.");
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return {
    isAuthenticated,
    login,
    logout,
    loading,
  };
};
