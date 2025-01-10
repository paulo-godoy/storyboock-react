import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useAuth } from "../hook/useAuth";
import Login from "../pages/Login/Login";

// Mock do hook useAuth
jest.mock("../hook/useAuth", () => ({
  useAuth: jest.fn(),
}));

describe("Login Component", () => {
  it("deve renderizar os campos de entrada e o botão de login", () => {
    (useAuth as jest.Mock).mockReturnValue({
      login: jest.fn(),
      loading: false,
    });

    render(<Login />);

    expect(screen.getByLabelText(/usuário/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /entrar/i })).toBeInTheDocument();
  });

  it("deve permitir que o usuário digite nos campos de entrada", () => {
    (useAuth as jest.Mock).mockReturnValue({
      login: jest.fn(),
      loading: false,
    });

    render(<Login />);

    const usernameInput = screen.getByLabelText(/usuário/i);
    const passwordInput = screen.getByLabelText(/senha/i);

    userEvent.type(usernameInput, "testUser");
    userEvent.type(passwordInput, "testPassword");

    expect(usernameInput).toHaveValue("testUser");
    expect(passwordInput).toHaveValue("testPassword");
  });

  it("deve chamar a função de login ao enviar o formulário", () => {
    const loginMock = jest.fn();
    (useAuth as jest.Mock).mockReturnValue({
      login: loginMock,
      loading: false,
    });

    render(<Login />);

    const usernameInput = screen.getByLabelText(/usuário/i);
    const passwordInput = screen.getByLabelText(/senha/i);
    const loginButton = screen.getByRole("button", { name: /entrar/i });

    userEvent.type(usernameInput, "testUser");
    userEvent.type(passwordInput, "testPassword");
    fireEvent.click(loginButton);

    expect(loginMock).toHaveBeenCalledWith("testUser", "testPassword");
  });

  it("deve desabilitar o botão de login quando está carregando", () => {
    (useAuth as jest.Mock).mockReturnValue({
      login: jest.fn(),
      loading: true,
    });

    render(<Login />);

    const loginButton = screen.getByRole("button", { name: /entrar/i });

    expect(loginButton).toBeDisabled();
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });
});
