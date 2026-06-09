
import { render, screen } from "@testing-library/react";
import ErrorBoundary from "../ErrorBoundary";

// NORMAL CASE
test("renders child when no error", () => {
  function Child() {
    return <div>Working Widget</div>;
  }

  render(
    <ErrorBoundary>
      <Child />
    </ErrorBoundary>
  );

  expect(screen.getByText("Working Widget")).toBeInTheDocument();
});

// EDGE CASE
test("shows fallback UI when child crashes", () => {
  const spy = jest.spyOn(console, "error").mockImplementation(() => {});

  function Crash() {
    throw new Error("Broken widget");
  }

  render(
    <ErrorBoundary>
      <Crash />
    </ErrorBoundary>
  );

  expect(
    screen.getByText("Widget Temporarily Unavailable")
  ).toBeInTheDocument();

  spy.mockRestore();
});