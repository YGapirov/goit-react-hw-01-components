import user from '../data/user.json';
import data from '../data/data.json';


import { Profile } from './Profile/Profile';
import { Statistic } from './Statistics/Statistics';


export const App = () => {
   return <Profile user={user} />,
  <Statistic title="Upload stats" data={data} />,
  <Statistic data={data} />;
};
