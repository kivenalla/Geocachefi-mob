import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignUpForm from "./SignUpForm";
import axiosAuth from "../../utils/axiosAuth"; // your custom axios instance

// Mock the axiosAuth module to avoid undefined interceptors
jest.mock("../../utils/axiosAuth", () => ({
  interceptors: {
    request: { use: jest.fn() },
    response: { use: jest.fn() },
  },
  post: jest.fn(), // mock the post method if your component calls it
}));

const toggleContent = jest.fn();
const toggleShowParent = jest.fn();
const onSubmit = jest.fn();

test("Component loads", async () => {
  render(
    <SignUpForm
      onSubmit={onSubmit}
      onLoginClicked={toggleContent}
      toggleShowParent={toggleShowParent}
    />
  );

  await waitFor(() => {
    expect(screen.getByTestId("signup-title")).toBeVisible();
  });
});
