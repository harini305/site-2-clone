import { site } from "@/lib/data/site";
import { formatPrice } from "@/lib/format";

export function getTotals(lines) {
  const subtotal = lines.reduce((s, l) => s + l.total, 0);
  const shipping = subtotal === 0 || subtotal >= site.freeShippingThreshold ? 0 : site.flatShipping;
  return { subtotal, shipping, total: subtotal + shipping };
}

export default function CartTotals({ totals, className }) {
  return (
    <table className={className}>
      <tbody>
        <tr>
          <th scope="row">Subtotal</th>
          <td>{formatPrice(totals.subtotal)}</td>
        </tr>
        <tr>
          <th scope="row">Shipping</th>
          <td>
            {totals.shipping === 0 ? "Free shipping" : `Flat rate: ${formatPrice(totals.shipping)}`}
            {totals.shipping > 0 ? (
              <small>
                Spend {formatPrice(site.freeShippingThreshold - totals.subtotal)} more for free shipping.
              </small>
            ) : null}
          </td>
        </tr>
        <tr>
          <th scope="row">Total</th>
          <td>
            <strong>{formatPrice(totals.total)}</strong>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
