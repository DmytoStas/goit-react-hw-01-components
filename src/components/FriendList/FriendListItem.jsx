import PropTypes from 'prop-types';

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

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
