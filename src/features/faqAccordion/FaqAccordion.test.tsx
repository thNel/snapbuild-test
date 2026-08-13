import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { FaqAccordion } from "./FaqAccordion";

describe("FaqAccordion", () => {
  it("reveals an answer after clicking its question", async () => {
    const user = userEvent.setup();

    render(<FaqAccordion />);

    await user.click(screen.getByRole("button", { name: "Как работает анализ бренда?" }));

    expect(screen.getByText(/Система анализирует существующие интерфейсы/)).toBeVisible();
  });
});
