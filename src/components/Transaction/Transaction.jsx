import css from './Transaction.module.css';

export default function Transaction({ props: { type, amount, currency } }) {
  return (
    <tr className={css.row}>
      <td className={css.cell}>{type}</td>
      <td className={css.cell}>{amount}</td>
      <td className={css.cell}>{currency}</td>
    </tr>
  );
}
