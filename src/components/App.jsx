import user from '../data/user.json';
import { Profile } from './Profile/Profile';

import data from '../data/data.json';
import { Statistic } from './Statistics/Statistics';

import friends from '../data/friends.json';
import { FriendList } from './FriendList/FriendList';

import transactions from '../data/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistic title="Upload stats" data={data} />
      <Statistic data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
      <GlobalStyle />
    </>
  );
};
