import styled from 'styled-components';

export const ProfWrapper = styled.div`
  max-width: 260px;
  margin: 20px;
  margin-bottom: 70px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
  overflow: hidden;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 270px;
  padding: 16px;
`;

export const UserAvatar = styled.img`
  width: 110px;
  height: 110px;
  margin-bottom: 20px;
  border: 1px solid #bbbaba87;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const UserName = styled.p`
  font-size: 24px;
  margin: 0;
  font-weight: bold;
`;

export const UserData = styled.p`
  font-size: 16px;
  color: grey;
  margin: 0;
`;
