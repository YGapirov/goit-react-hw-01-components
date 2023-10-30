import { FriendItem, FriendName, FriendStatus } from './FriendlistItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <FriendItem>
    <FriendStatus statusType={isOnline}></FriendStatus>
    <img src={avatar} alt="User avatar" width="48" />
    <FriendName>{name}</FriendName>
  </FriendItem>
);
