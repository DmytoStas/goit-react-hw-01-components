import styled from '@emotion/styled';

const BodyRow = styled.tr`
  width: 100%;
  height: 50px;

  color: #888;
  text-transform: capitalize;
  :nth-of-type(2n + 1) {
    background-color: #f4f4f4;
  }
`;

const BodyTableCell = styled.td`
  text-align: center;
  border-left: 1px solid #d0d0d0;
  border-right: 1px solid #d0d0d0;
  :first-of-type {
    border-left: none;
  }
  :last-of-type {
    border-right: none;
  }
`;

export { BodyRow, BodyTableCell };
