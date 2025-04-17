import css from './TransactionHistory.module.css';
import Transaction from '../Transaction/Transaction';

export default function TransactionHistory({ props }) {
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
        {props.map((transaction) => (
          <Transaction key={transaction.id} props={transaction} />
        ))}
      </tbody>
    </table>
  );
}
