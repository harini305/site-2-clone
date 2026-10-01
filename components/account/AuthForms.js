"use client";

import { useState } from "react";
import { toast } from "@/lib/store";
import Button from "@/components/ui/Button";
import styles from "./AuthForms.module.css";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function Field({ id, label, error, ...props }) {
  return (
    <div>
      <label className="label" htmlFor={id}>
        {label}
        <span className="req">*</span>
      </label>
      <input
        id={id}
        className="field"
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-err` : undefined}
        {...props}
      />
      {error ? (
        <p id={`${id}-err`} className="field-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function AuthForms() {
  const [login, setLogin] = useState({ user: "", password: "", remember: false });
  const [reg, setReg] = useState({ email: "", password: "" });
  const [loginErrors, setLoginErrors] = useState({});
  const [regErrors, setRegErrors] = useState({});

  const onLogin = (e) => {
    e.preventDefault();
    const errs = {};
    if (!login.user.trim()) errs.user = "Please enter your username or email address.";
    if (!login.password) errs.password = "Please enter your password.";
    setLoginErrors(errs);
    if (Object.keys(errs).length) return;
    toast("Demo store: sign-in isn’t connected to a backend, so no account was accessed.", "info");
  };

  const onRegister = (e) => {
    e.preventDefault();
    const errs = {};
    if (!EMAIL.test(reg.email.trim())) errs.email = "Please enter a valid email address.";
    if (reg.password.length < 8) errs.password = "Use at least 8 characters.";
    setRegErrors(errs);
    if (Object.keys(errs).length) return;
    setReg({ email: "", password: "" });
    toast("Demo store: registration isn’t connected to a backend, so no account was created.", "info");
  };

  return (
    <>
      <p className="demo-note">
        Demo only: these forms validate your input but no account data is sent or stored.
      </p>
      <div className={styles.grid}>
        <section aria-labelledby="login-title">
          <h1 id="login-title" className={styles.title}>
            Login
          </h1>
          <form className={styles.form} onSubmit={onLogin} noValidate>
            <div className={styles.row}>
              <Field
                id="login-user"
                label="Username or email address"
                autoComplete="username"
                value={login.user}
                onChange={(e) => setLogin({ ...login, user: e.target.value })}
                error={loginErrors.user}
              />
              <Field
                id="login-password"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={login.password}
                onChange={(e) => setLogin({ ...login, password: e.target.value })}
                error={loginErrors.password}
              />
            </div>
            <label className={styles.check}>
              <input
                type="checkbox"
                checked={login.remember}
                onChange={(e) => setLogin({ ...login, remember: e.target.checked })}
              />
              Remember me
            </label>
            <Button type="submit" className={styles.submit}>
              Log in
            </Button>
            <button
              type="button"
              className={styles.lost}
              onClick={() => toast("Demo store: password reset emails aren’t available.", "info")}
            >
              Lost your password?
            </button>
          </form>
        </section>

        <section aria-labelledby="register-title">
          <h2 id="register-title" className={styles.title}>
            Register
          </h2>
          <form className={styles.form} onSubmit={onRegister} noValidate>
            <Field
              id="reg-email"
              label="Email address"
              type="email"
              autoComplete="email"
              value={reg.email}
              onChange={(e) => setReg({ ...reg, email: e.target.value })}
              error={regErrors.email}
            />
            <Field
              id="reg-password"
              label="Password"
              type="password"
              autoComplete="new-password"
              value={reg.password}
              onChange={(e) => setReg({ ...reg, password: e.target.value })}
              error={regErrors.password}
            />
            <p className={styles.small}>
              Your personal data will be used to support your experience throughout this website and to manage
              access to your account.
            </p>
            <Button type="submit" className={styles.submit}>
              Register
            </Button>
          </form>
        </section>
      </div>
    </>
  );
}
