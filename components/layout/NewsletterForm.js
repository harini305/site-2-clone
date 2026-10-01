"use client";

import { useId, useState } from "react";
import { toast } from "@/lib/store";
import styles from "./Footer.module.css";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function NewsletterForm() {
  const id = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!EMAIL.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setEmail("");
    toast("Thanks for subscribing! (Demo only: no email is sent.)", "success");
  };

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate data-reveal="up">
      <label htmlFor={id} className="visually-hidden">
        Email address
      </label>
      <input
        id={id}
        type="email"
        className={styles.input}
        placeholder="ENTER YOUR EMAIL ADDRESS"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-err` : undefined}
        autoComplete="email"
      />
      <button type="submit" className={styles.submit}>
        Submit
      </button>
      {error ? (
        <p id={`${id}-err`} className={styles.error} role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
