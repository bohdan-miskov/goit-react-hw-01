import css from './TransactionHistory.module.css';

export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.table}>
      <thead className={css.head}>
        <tr>
          <th className={css.headCell}>Type</th>
          <th className={css.headCell}>Amount</th>
          <th className={css.headCell}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ type, amount, currency }) => (
          <tr className={css.row}>
            <td className={css.cell}>{type}</td>
            <td className={css.cell}>{amount}</td>
            <td className={css.cell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
