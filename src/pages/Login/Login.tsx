import React, { useState } from "react";
import { useAuth } from "../../hook/useAuth";
import { InputField } from "../../components/inputField/InputField";
import "./Login.scss";
import { Loading } from "../../components/loading/Loading";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <InputField
          id="username"
          label="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <InputField
          id="password"
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          Entrar
        </button>
      </form>
      {loading && <Loading />}{" "}
    </div>
  );
};

export default Login;
