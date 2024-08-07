import React from 'react';
import styled from 'styled-components/native';
import {useAuthStore} from '../../store/store';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 16px;
  color: ${(props) => props.theme.colors.primary};
`;

const Button = styled.Button``;
const DashboardScreen: React.FC = ({ navigation }: { navigation: any }) => {
  const { isAuthenticated, logout } = useAuthStore();

  if (!isAuthenticated) {
    navigation.navigate('Login'); // Navigate to LoginScreen if not authenticated
    return null;
  }

  const handleLogout = async () => {
    await logout();
    navigation.navigate('Login'); // Navigate to LoginScreen after logout
  };

  return (
    <Container>
      <Title>Welcome</Title>
      <Button title="Logout" onPress={handleLogout} />
    </Container>
  );
};

export default DashboardScreen;
