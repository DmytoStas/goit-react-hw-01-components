import { BodyRow, BodyTableCell } from './TransactionHistory.styled';

export default function Transaction({ type, amount, currency }) {
  return (
    <BodyRow>
      <BodyTableCell>{type}</BodyTableCell>
      <BodyTableCell>{amount}</BodyTableCell>
      <BodyTableCell>{currency}</BodyTableCell>
    </BodyRow>
  );
}
