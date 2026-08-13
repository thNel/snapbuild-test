import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { UseCaseTabs } from "./UseCaseTabs";

describe("UseCaseTabs", () => {
  it("switches the active material mode", async () => {
    const user = userEvent.setup();

    render(<UseCaseTabs />);

    await user.click(screen.getByRole("tab", { name: "Изображения" }));

    expect(screen.getByRole("tab", { name: "Изображения" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(screen.getByRole("img", { name: "Редактор брендовых изображений" })).toBeVisible();
  });

  it("switches the active feature inside a mode", async () => {
    const user = userEvent.setup();

    render(<UseCaseTabs />);

    await user.click(screen.getByRole("button", { name: /^Страница за минуту/ }));

    expect(screen.getByRole("img", { name: "Готовая страница в дизайн-системе" })).toBeVisible();
  });
});
