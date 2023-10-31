import styled from 'styled-components';

const getBgColor = p => {
  switch (p.$variant) {
    case '.docx':
      return 'orange';
    case '.pdf':
      return 'green';
    case '.mp3':
      return 'tomato';
    case '.psd':
      return 'grey';
    default:
      return 'blue';
  }
};

export const StatSection = styled.section`
  max-width: 400px;
  text-align: center;
  margin: 40px;
  margin-bottom: 40px;
  border: 1px solid silver;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const StatTitle = styled.h2`
  margin: 20px;
  text-transform: uppercase;
  font-size: 18px;
  color: grey;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px;
  border: 1px solid #bbbaba87;
  width: 50%;
  color: #fff;
  background-color: ${getBgColor};
`;
