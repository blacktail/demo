import { render, screen } from "@testing-library/react";
import { MyComponent } from ".";

test("displays the correct text", () => {
  render(<MyComponent />);
  expect(screen.getByText("Hello, world!")).toBeInTheDocument();
});
