import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 800px;
  margin: 40px;

  border-radius: 8px;
  box-shadow:
    0px 3px 1px rgba(0, 0, 0, 0.1),
    0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  text-align: center;
`;

export const TableTitle = styled.thead`
  text-transform: uppercase;
`;

export const TableItem = styled.th`
  padding: 22px;
  width: 34%;
  background-color: teal;
  color: #fff;
  border-radius: 8px;
`;

export const TableList = styled.td`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  text-transform: capitalize;
  color: grey;
`;
