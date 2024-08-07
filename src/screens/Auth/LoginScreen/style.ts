import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

export const Card = styled.View`
 width: 80%;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  shadow-color: #000;
`;

export const Title = styled.Text`
  font-family: 'DMSerifDisplay-Regular'; // Pastikan font sudah di-load dengan benar
  color: ${(props) => props.theme.colors.primaryMain};
  font-size: 24px;
  margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
  font-family: 'Urbanist-Regular'; // Pastikan font sudah di-load dengan benar
  color: ${(props) => props.theme.colors.neutral70};
  font-size: 16px;
  margin-bottom: 16px;
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
