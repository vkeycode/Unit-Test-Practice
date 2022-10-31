import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("app test", () => {
  let headerTitle, items, emoji, input, copytext;

  beforeEach(() => {
    headerTitle = screen.getByText("Emoji Search");
    items = screen.getAllByText("Click to copy emoji");
    emoji = "100";
    input = screen.getByRole("textbox");
    copytext = screen.getAllByText('Click to copy emoji');
    userEvent.click(copytext);
    render(<App />);
  });

  test("header", () => {
    expect(headerTitle).toBeInDocument;
  });

  test("listed", () => {
    userEvent.type(input, emoji);
    expect(items.length).toEqual(20);
  });

  test("filter", () => {
    userEvent.type(input, emoji);
    expect(screen.getByText(emoji)).toBeInTheDocument;
  });

  test('copy', () => {
    userEvent.paste(input, copytext)
    expect(input.length === 1);
  });
});
