import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";

// Mock your custom axios instance
jest.mock("../../utils/axiosAuth", () => ({
  interceptors: {
    request: { use: jest.fn() },
    response: { use: jest.fn() },
  },
  post: jest.fn(),
}));

import axiosAuth from "../../utils/axiosAuth";

const toggleContent = jest.fn();
const toggleShowParent = jest.fn();
const onLoginSubmit = jest.fn();

test("Component loads", async () => {
  render(
    <LoginForm
      onSubmit={onLoginSubmit}
      onRegisterClicked={toggleContent}
      toggleShowParent={toggleShowParent}
    />
  );

  await waitFor(() => {
    expect(screen.getByTestId("login-title")).toBeVisible();
  });
});

test("Login API call is made", async () => {
  render(
    <LoginForm
      onSubmit={onLoginSubmit}
      onRegisterClicked={toggleContent}
      toggleShowParent={toggleShowParent}
    />
  );

  const usernameField = screen.getByTestId("username-login");
  const passwordField = screen.getByTestId("password-login");
  const username = "teppo";
  const password = "teppo123";

  userEvent.type(usernameField, username);
  userEvent.type(passwordField, password);
  userEvent.click(screen.getByTestId("login-submit"));

    const mockedPost = axiosAuth.post as jest.Mock;

  await waitFor(() => {
    expect(mockedPost).toHaveBeenCalledWith("/api/auth/login", { username, password });
  });
});
