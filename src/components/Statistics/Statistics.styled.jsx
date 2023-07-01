import styled from '@emotion/styled';

import getRandomColor from '../../js/getRandomColor';

const StatisticsContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;

  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: #fff;
  overflow: hidden;
`;

const Title = styled.h2`
  padding: 30px 0;
  color: #909090;
  text-align: center;
  text-transform: uppercase;
`;

const StatsList = styled.ul`
  display: flex;
  margin: 0 auto;
  padding: 0;
  height: 100px;

  list-style-type: none;
`;

const StatsItem = styled.li`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${getRandomColor};
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.65) inset;
`;

const Label = styled.span`
  font-size: 14px;
  color: #fff;
`;

const Percentage = styled.span`
  margin-top: 5px;
  font-size: 22px;
  color: #fff;
`;

export { StatisticsContainer, Title, StatsList, StatsItem, Label, Percentage };
