import { Avatar, ListItem, Status, UserName } from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <ListItem className="item">
      <Status status={isOnline}></Status>
      <Avatar className="avatar" src={avatar} alt="User avatar" />
      <UserName>{name}</UserName>
    </ListItem>
  );
}
