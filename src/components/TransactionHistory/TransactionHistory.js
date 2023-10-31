import {
  TransactionTable,
  TableTitle,
  TableItem,
  TableList,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableTitle>
        <tr>
          <TableItem>Type</TableItem>
          <TableItem>Amount</TableItem>
          <TableItem>Currency</TableItem>
        </tr>
      </TableTitle>
      {items.map(item => (
        <tbody>
          <tr key={item.id}>
            <TableList>{item.type}</TableList>
            <TableList>{item.amount}</TableList>
            <TableList>{item.currency}</TableList>
          </tr>
        </tbody>
      ))}
    </TransactionTable>
  );
};
