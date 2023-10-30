import { FriendListItem } from './FriendListItem/FriendListItem';
import { FriendsWrapper } from './FriendList.styled';

export const FriendList = ({ friends }) => (
  <FriendsWrapper>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </FriendsWrapper>
);
