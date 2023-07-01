import styled from '@emotion/styled';

const ListItem = styled.li`
  display: flex;
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  padding-left: 15px;
  align-items: center;
  gap: 15px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);

  :last-of-type {
    margin-bottom: 0;
  }
`;

const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;

const Avatar = styled.img`
  width: 50px;
`;

const UserName = styled.p`
  font-size: 24px;
`;

export { ListItem, Status, Avatar, UserName };
