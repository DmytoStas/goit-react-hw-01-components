import PropTypes from 'prop-types';
import Transaction from './Transaction';
import {
  HeaderItem,
  Table,
  TableBody,
  TableHeader,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <TableHeader>
        <tr>
          <HeaderItem>Type</HeaderItem>
          <HeaderItem>Amount</HeaderItem>
          <HeaderItem>Currency</HeaderItem>
        </tr>
      </TableHeader>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </TableBody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
