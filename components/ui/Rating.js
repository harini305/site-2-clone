import { PiStar, PiStarFill } from "react-icons/pi";

export default function Rating({ value = 0, size = 16, color = "#ffb400" }) {
  return (
    <span
      role="img"
      aria-label={`Rated ${value} out of 5`}
      style={{ display: "inline-flex", gap: 2, color, fontSize: size }}
    >
      {[1, 2, 3, 4, 5].map((n) =>
        n <= Math.round(value) ? <PiStarFill key={n} aria-hidden="true" /> : <PiStar key={n} aria-hidden="true" />
      )}
    </span>
  );
}
