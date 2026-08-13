import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";

import { CookieConsent } from "./CookieConsent";

class MemoryStorage implements Storage {
  private readonly values = new Map<string, string>();

  get length() {
    return this.values.size;
  }

  clear() {
    this.values.clear();
  }

  getItem(key: string) {
    return this.values.get(key) ?? null;
  }

  key(index: number) {
    return [...this.values.keys()][index] ?? null;
  }

  removeItem(key: string) {
    this.values.delete(key);
  }

  setItem(key: string, value: string) {
    this.values.set(key, value);
  }
}

describe("CookieConsent", () => {
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      configurable: true,
      value: new MemoryStorage(),
    });
  });

  it("stores consent after accepting cookies", async () => {
    const user = userEvent.setup();

    render(<CookieConsent />);

    expect(screen.getByRole("link", { name: "политику конфиденциальности" })).toHaveAttribute(
      "href",
      "https://snapbuild.ru/privacy",
    );
    expect(
      screen.getByRole("link", { name: "соглашение на обработку персональных данных." }),
    ).toHaveAttribute("href", "https://snapbuild.ru/agreement");

    await user.click(screen.getByRole("button", { name: "Принять" }));

    expect(window.localStorage.getItem("snapbuild-cookie-consent")).toBe("accepted");
  });
});
