import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Searchbox", () => {
  render(<App />);
  const linkElement = screen.getByText(/Search for user.../i);
  expect(linkElement).toBeInTheDocument();
});
