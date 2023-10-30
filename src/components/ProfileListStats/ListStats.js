import { List, ListItem, ListNumbers } from './ListStats.styled';

export const ListStats = ({ stats: { followers, views, likes } }) => {
  return (
    <List>
      <ListItem>
        <span>Followers</span>
        <ListNumbers>{followers}</ListNumbers>
      </ListItem>
      <ListItem>
        <span>Views</span>
        <ListNumbers>{views}</ListNumbers>
      </ListItem>
      <ListItem>
        <span>Likes</span>
        <ListNumbers>{likes}</ListNumbers>
      </ListItem>
    </List>
  );
};
