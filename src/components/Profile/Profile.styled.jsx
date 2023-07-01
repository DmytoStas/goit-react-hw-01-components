import styled from '@emotion/styled';

const ProfileContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;

  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: #fff;
  overflow: hidden;
`;

const Avatar = styled.img`
  width: 90px;
  margin-bottom: 10px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 0 20px;
  margin-bottom: 25px;
`;

const UserName = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: #000;
`;

const Tag = styled.p`
  color: #9d9d9d;
`;

const Location = Tag.withComponent('p');

const Stats = styled.ul`
  display: flex;
  margin: 0 auto;
  padding: 0;
  height: 100px;

  list-style-type: none;
  border-top: 1px solid #d0d0d0;
  background-color: #f4f4f4;
`;

const StatsItem = styled.li`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-right: 1px solid #d0d0d0;

  :last-of-type {
    border-right: none;
  }
`;

const Quantity = styled.span`
  font-weight: 500;
  font-size: 18px;
`;

const Label = Tag.withComponent('span');

export {
  ProfileContainer,
  Avatar,
  Description,
  UserName,
  Tag,
  Location,
  Stats,
  StatsItem,
  Label,
  Quantity,
};
