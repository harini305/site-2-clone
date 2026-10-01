"use client";

import { useState } from "react";
import { toast } from "@/lib/store";
import Button from "@/components/ui/Button";
import styles from "./Contact.module.css";

const EMPTY = { name: "", email: "", website: "", comment: "" };

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) errs.email = "Please enter a valid email address.";
    if (form.website.trim() && !/^(https?:\/\/)?[\w-]+(\.[\w-]+)+\S*$/i.test(form.website.trim())) {
      errs.website = "Please enter a valid website address.";
    }
    if (form.comment.trim().length < 10) errs.comment = "Please write a message of at least 10 characters.";
    setErrors(errs);
    const first = Object.keys(errs)[0];
    if (first) {
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }
    setForm(EMPTY);
    toast("Thanks! Your message is ready to send. (Demo only: nothing was submitted.)", "success");
  };

  const err = (k) =>
    errors[k] ? (
      <p id={`contact-${k}-err`} className="field-error">
        {errors[k]}
      </p>
    ) : null;
  const aria = (k) => ({
    "aria-invalid": errors[k] ? "true" : undefined,
    "aria-describedby": errors[k] ? `contact-${k}-err` : undefined,
  });

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate data-reveal="up">
      <div>
        <label htmlFor="contact-name" className="visually-hidden">
          Name (required)
        </label>
        <input id="contact-name" className="field" placeholder="Name (required)" autoComplete="name" value={form.name} onChange={set("name")} {...aria("name")} />
        {err("name")}
      </div>
      <div>
        <label htmlFor="contact-email" className="visually-hidden">
          Your email (required)
        </label>
        <input id="contact-email" type="email" className="field" placeholder="Your Email" autoComplete="email" value={form.email} onChange={set("email")} {...aria("email")} />
        {err("email")}
      </div>
      <div className={styles.full}>
        <label htmlFor="contact-website" className="visually-hidden">
          Website (optional)
        </label>
        <input id="contact-website" className="field" placeholder="Website" autoComplete="url" value={form.website} onChange={set("website")} {...aria("website")} />
        {err("website")}
      </div>
      <div className={styles.full}>
        <label htmlFor="contact-comment" className="visually-hidden">
          Comment (required)
        </label>
        <textarea id="contact-comment" className="field" placeholder="Comment" rows={6} value={form.comment} onChange={set("comment")} {...aria("comment")} />
        {err("comment")}
      </div>
      <div className={`${styles.full} ${styles.submitRow}`}>
        <p className={styles.note}>Demo form: messages are validated but not sent.</p>
        <Button type="submit" size="lg" className={styles.send}>
          Send Now
        </Button>
      </div>
    </form>
  );
}
