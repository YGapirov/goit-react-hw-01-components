import { ListStats } from 'components/ProfileListStats/ListStats';
import { ProfWrapper, UserAvatar, UserWrapper, UserName, UserData } from './Profile.styled';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <ProfWrapper>
      <UserWrapper>
        <UserAvatar src={avatar} alt="User avatar" width="100" height="100" />
        <UserName>{username}</UserName>
        <UserData>@{tag}</UserData>
        <UserData>{location}</UserData>
      </UserWrapper>
      <ListStats stats={stats} />
    </ProfWrapper>
  );
};
