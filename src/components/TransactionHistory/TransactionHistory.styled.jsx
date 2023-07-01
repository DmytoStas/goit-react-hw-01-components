import styled from '@emotion/styled';

const Table = styled.table`
  width: 1000px;
  margin: 0 auto;
  margin-top: 20px;

  border-spacing: 1px;
  border-collapse: collapse;
  background-color: #fff;

  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
`;

const TableHeader = styled.thead`
  width: 100%;
  height: 50px;

  text-transform: uppercase;
  color: #fff;
  background: #38e5eb;
`;

const HeaderItem = styled.th`
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;

  :first-of-type {
    border-left: none;
  }
  :last-of-type {
    border-right: none;
  }
`;

const TableBody = styled.tbody`
  width: 100%;
`;

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

export { Table, TableHeader, HeaderItem, TableBody, BodyRow, BodyTableCell };
