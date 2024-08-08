import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  margin: 3%;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neutral80};
  margin-left: 10px
`;

export const Total = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Icon = styled.Image`
  width: 20px;
  height:20px;
  margin-bottom: 8px;
`;
