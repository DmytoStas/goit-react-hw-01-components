import PropTypes from 'prop-types';

import { BodyRow, BodyTableCell } from './Transaction.styled';

export default function Transaction({ type, amount, currency }) {
  return (
    <BodyRow>
      <BodyTableCell>{type}</BodyTableCell>
      <BodyTableCell>{amount}</BodyTableCell>
      <BodyTableCell>{currency}</BodyTableCell>
    </BodyRow>
  );
}

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
