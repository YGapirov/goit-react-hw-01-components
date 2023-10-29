import { ListStats } from 'components/ProfileListStats/ListStats';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <div>
      <div>
        <img src={avatar} alt="User avatar" width="100" height="100" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ListStats stats={stats} />
    </div>
  );
};
