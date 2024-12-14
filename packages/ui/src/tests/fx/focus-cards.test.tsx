import { render, screen } from "@testing-library/react";
import * as React from "react";
import "@testing-library/jest-dom";
import { FocusCards } from "$/focus-cards";
import userEvent from "@testing-library/user-event";

describe("FocusCards", () => {
  it("renders correctly with default props", () => {
    const cards = [
      { title: "Card 1", src: "https://example.com/card1.jpg", href: "/card1" },
      { title: "Card 2", src: "https://example.com/card2.jpg", href: "/card2" },
      { title: "Card 3", src: "https://example.com/card3.jpg", href: "/card3" },
    ];
    render(<FocusCards cards={cards} />);
    const container = screen.getByTestId("focus-card-wrapper");
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass(
      "grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full"
    );
  });

  it("renders cards correctly", () => {
    const cards = [
      { title: "Card 1", src: "https://example.com/card1.jpg", href: "/card1" },
      { title: "Card 2", src: "https://example.com/card2.jpg", href: "/card2" },
      { title: "Card 3", src: "https://example.com/card3.jpg", href: "/card3" },
    ];
    render(<FocusCards cards={cards} />);
    expect(screen.getAllByTestId("focus-cards")).toHaveLength(3);
  });

  it("renders card titles correctly", () => {
    const cards = [
      { title: "Card 1", src: "https://example.com/card1.jpg", href: "/card1" },
      { title: "Card 2", src: "https://example.com/card2.jpg", href: "/card2" },
      { title: "Card 3", src: "https://example.com/card3.jpg", href: "/card3" },
    ];
    render(<FocusCards cards={cards} />);
    cards.forEach((card) => {
      const cardTitle = screen.getByText(card.title);
      expect(cardTitle).toBeInTheDocument();
      expect(cardTitle).toHaveClass(
        "text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200"
      );
    });
  });
});
