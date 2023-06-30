import PropTypes from 'prop-types';
import {
  Label,
  Percentage,
  StatisticsContainer,
  StatsItem,
  StatsList,
  Title,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatisticsContainer>
      {title && <Title>{title}</Title>}

      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatsItem>
        ))}
      </StatsList>
    </StatisticsContainer>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
