import {
  StatSection,
  StatTitle,
  StatItem,
  StatList,
} from '../Statistics/Statistics.styled';

export const Statistic = ({ title, data }) => {
  return (
    <StatSection>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {data.map(stat => (
          <StatItem key={stat.id} $variant={stat.label}>
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </StatSection>
  );
};
