import { act, fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { DemoRequestForm } from "./DemoRequestForm";

describe("DemoRequestForm", () => {
  it("shows validation errors for an empty submission", () => {
    render(<DemoRequestForm />);

    fireEvent.click(screen.getByRole("button", { name: "Показать сценарий" }));

    expect(screen.getByText("Укажите компанию")).toBeInTheDocument();
    expect(screen.getByText("Укажите рабочую почту")).toBeInTheDocument();
    expect(screen.getByText("Опишите задачу чуть подробнее")).toBeInTheDocument();
  });

  it("shows a success state after a valid submission", async () => {
    vi.useFakeTimers();
    render(<DemoRequestForm />);

    fireEvent.change(screen.getByLabelText("Компания"), { target: { value: "Acme" } });
    fireEvent.change(screen.getByLabelText("Рабочая почта"), { target: { value: "team@acme.ru" } });
    fireEvent.change(screen.getByLabelText("Что нужно собрать?"), {
      target: { value: "Собрать презентацию для запуска" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Показать сценарий" }));

    await act(async () => {
      await Promise.resolve();
      vi.advanceTimersByTime(500);
    });
    expect(screen.getByRole("status")).toBeInTheDocument();
    vi.useRealTimers();
  });
});
