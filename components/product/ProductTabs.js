"use client";

import { useId, useRef, useState } from "react";
import { toast } from "@/lib/store";
import Rating from "@/components/ui/Rating";
import Button from "@/components/ui/Button";
import styles from "./ProductTabs.module.css";

export default function ProductTabs({ product }) {
  const [tab, setTab] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ rating: 0, text: "", name: "", email: "" });
  const [errors, setErrors] = useState({});
  const tabRefs = useRef([]);
  const id = useId();

  const tabs = ["Description", "Additional information", `Reviews (${reviews.length})`];

  const onKeyDown = (e, i) => {
    const map = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    if (map[e.key] === undefined) return;
    e.preventDefault();
    const next = (i + map[e.key] + tabs.length) % tabs.length;
    setTab(next);
    tabRefs.current[next]?.focus();
  };

  const submitReview = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.rating) errs.rating = "Please choose a rating.";
    if (form.text.trim().length < 5) errs.text = "Please write a short review.";
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) errs.email = "Please enter a valid email.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setReviews((r) => [...r, { ...form, date: new Date().toLocaleDateString("en-US", { dateStyle: "long" }) }]);
    setForm({ rating: 0, text: "", name: "", email: "" });
    toast("Thanks! Your review was added (demo only: it is not saved).", "success");
  };

  return (
    <section className={`container ${styles.wrap}`} aria-label="Product information">
      <div role="tablist" aria-orientation="vertical" aria-label="Product information" className={styles.tabs}>
        {tabs.map((label, i) => (
          <button
            key={label}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${id}-tab-${i}`}
            aria-controls={`${id}-panel-${i}`}
            aria-selected={tab === i}
            tabIndex={tab === i ? 0 : -1}
            className={tab === i ? styles.active : undefined}
            onClick={() => setTab(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            {label}
          </button>
        ))}
        <span className={styles.indicator} style={{ transform: `translateY(${tab * 100}%)` }} aria-hidden="true" />
      </div>

      <div
        role="tabpanel"
        id={`${id}-panel-${tab}`}
        aria-labelledby={`${id}-tab-${tab}`}
        className={styles.panel}
        tabIndex={0}
      >
        {tab === 0 ? (
          <>
            {product.description.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <h3 className={styles.subhead}>Product Details</h3>
            <p>{product.summary}</p>
            <ul className={styles.bullets}>
              {product.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </>
        ) : null}

        {tab === 1 ? (
          <table className={styles.table}>
            <tbody>
              <tr>
                <th scope="row">Weight / Size</th>
                <td>{product.weight}</td>
              </tr>
              <tr>
                <th scope="row">Origin</th>
                <td>{product.origin}</td>
              </tr>
              <tr>
                <th scope="row">Availability</th>
                <td>{product.inStock ? "In stock" : "Out of stock"}</td>
              </tr>
            </tbody>
          </table>
        ) : null}

        {tab === 2 ? (
          <div className={styles.reviews}>
            {reviews.length === 0 ? (
              <p>There are no reviews yet. Be the first to review “{product.name}”.</p>
            ) : (
              <ul className={styles.reviewList}>
                {reviews.map((r, i) => (
                  <li key={i}>
                    <Rating value={r.rating} />
                    <p className={styles.reviewMeta}>
                      <strong>{r.name}</strong> · {r.date}
                    </p>
                    <p>{r.text}</p>
                  </li>
                ))}
              </ul>
            )}

            <form className={styles.form} onSubmit={submitReview} noValidate>
              <h3 className={styles.subhead}>Add a review</h3>
              <p className="demo-note">Demo only: reviews stay in this browser tab and aren’t sent anywhere.</p>
              <fieldset className={styles.stars}>
                <legend className="label">
                  Your rating<span className="req">*</span>
                </legend>
                {[1, 2, 3, 4, 5].map((n) => (
                  <label key={n} className={n <= form.rating ? styles.starOn : undefined}>
                    <input
                      type="radio"
                      name="rating"
                      value={n}
                      checked={form.rating === n}
                      onChange={() => setForm({ ...form, rating: n })}
                      className="visually-hidden"
                    />
                    <span aria-hidden="true">★</span>
                    <span className="visually-hidden">
                      {n} star{n > 1 ? "s" : ""}
                    </span>
                  </label>
                ))}
                {errors.rating ? <p className="field-error">{errors.rating}</p> : null}
              </fieldset>
              <div>
                <label className="label" htmlFor={`${id}-text`}>
                  Your review<span className="req">*</span>
                </label>
                <textarea
                  id={`${id}-text`}
                  className="field"
                  rows={5}
                  value={form.text}
                  onChange={(e) => setForm({ ...form, text: e.target.value })}
                  aria-invalid={errors.text ? "true" : undefined}
                />
                {errors.text ? <p className="field-error">{errors.text}</p> : null}
              </div>
              <div className={styles.row}>
                <div>
                  <label className="label" htmlFor={`${id}-name`}>
                    Name<span className="req">*</span>
                  </label>
                  <input
                    id={`${id}-name`}
                    className="field"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    aria-invalid={errors.name ? "true" : undefined}
                    autoComplete="name"
                  />
                  {errors.name ? <p className="field-error">{errors.name}</p> : null}
                </div>
                <div>
                  <label className="label" htmlFor={`${id}-email`}>
                    Email<span className="req">*</span>
                  </label>
                  <input
                    id={`${id}-email`}
                    type="email"
                    className="field"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    aria-invalid={errors.email ? "true" : undefined}
                    autoComplete="email"
                  />
                  {errors.email ? <p className="field-error">{errors.email}</p> : null}
                </div>
              </div>
              <Button type="submit">Submit review</Button>
            </form>
          </div>
        ) : null}
      </div>
    </section>
  );
}
