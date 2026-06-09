
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders dashboard correctly", () => {
  render(<App />);

  expect(screen.getByText("Social Media Dashboard")).toBeInTheDocument();

  expect(
    screen.getByText("Widget Temporarily Unavailable")
  ).toBeInTheDocument();

  expect(screen.getByText("News Feed")).toBeInTheDocument();

  expect(screen.getByText("User Profile")).toBeInTheDocument();
});
