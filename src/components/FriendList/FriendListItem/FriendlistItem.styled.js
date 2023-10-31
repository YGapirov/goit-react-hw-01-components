import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  height: 70px;
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #bbbaba87;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const FriendName = styled.p`
  font-weight: bold;
  font-size: 22px;
`;

export const FriendStatus = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  margin-left: 5px;
  border-radius: 50%;
  background-color: ${p => (p.statusType ? 'green' : 'red')};
`;
