import { type SyntheticEvent, useState } from "react";

import { Button, Input, Label, Textarea } from "@/shared/ui/primitives";

import styles from "./DemoRequestForm.module.css";

interface FormValues {
  company: string;
  email: string;
  request: string;
}

interface FormErrors {
  company?: string;
  email?: string;
  request?: string;
}

const initialValues: FormValues = { company: "", email: "", request: "" };

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.company.trim()) errors.company = "Укажите компанию";
  if (!values.email.trim()) {
    errors.email = "Укажите рабочую почту";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Проверьте адрес почты";
  }
  if (values.request.trim().length < 10) errors.request = "Опишите задачу чуть подробнее";

  return errors;
}

export function DemoRequestForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 500);
  };

  if (status === "success") {
    return (
      <div className={styles.success} role="status">
        <span className={styles.successMark} aria-hidden="true">
          ✓
        </span>
        <h3>Задача отправлена</h3>
        <p>Мы свяжемся с вами и покажем, как собрать этот сценарий в Снэпбилде.</p>
        <Button onClick={() => setStatus("idle")} type="button" variant="outline">
          Отправить ещё одну
        </Button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.fields}>
        <div className={styles.field}>
          <Label htmlFor="demo-company">Компания</Label>
          <Input
            aria-describedby={errors.company ? "demo-company-error" : undefined}
            aria-invalid={Boolean(errors.company)}
            id="demo-company"
            onChange={(event) => handleChange("company", event.target.value)}
            placeholder="Например, Снэпбилд"
            value={values.company}
          />
          {errors.company ? (
            <span className={styles.error} id="demo-company-error">
              {errors.company}
            </span>
          ) : null}
        </div>
        <div className={styles.field}>
          <Label htmlFor="demo-email">Рабочая почта</Label>
          <Input
            aria-describedby={errors.email ? "demo-email-error" : undefined}
            aria-invalid={Boolean(errors.email)}
            id="demo-email"
            onChange={(event) => handleChange("email", event.target.value)}
            placeholder="name@company.ru"
            type="email"
            value={values.email}
          />
          {errors.email ? (
            <span className={styles.error} id="demo-email-error">
              {errors.email}
            </span>
          ) : null}
        </div>
      </div>
      <div className={styles.field}>
        <Label htmlFor="demo-request">Что нужно собрать?</Label>
        <Textarea
          aria-describedby={errors.request ? "demo-request-error" : undefined}
          aria-invalid={Boolean(errors.request)}
          id="demo-request"
          onChange={(event) => handleChange("request", event.target.value)}
          placeholder="Расскажите о задаче, команде и нужных материалах"
          value={values.request}
        />
        {errors.request ? (
          <span className={styles.error} id="demo-request-error">
            {errors.request}
          </span>
        ) : null}
      </div>
      <div className={styles.actions}>
        <Button disabled={status === "submitting"} type="submit">
          {status === "submitting" ? "Отправляем…" : "Показать сценарий"}
        </Button>
        <span>Ответим в течение рабочего дня</span>
      </div>
    </form>
  );
}
