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

export { Table, TableHeader, HeaderItem, TableBody };
