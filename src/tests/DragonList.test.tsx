import { render, screen } from "@testing-library/react";
import { DragonList } from "../pages/DragonList/DragonList";

describe("DragonList", () => {
  test("renders dragon list", () => {
    render(<DragonList />);
    const linkElement = screen.getByText(/dragons/i);
    expect(linkElement).toBeInTheDocument();
  });
});

export {};
