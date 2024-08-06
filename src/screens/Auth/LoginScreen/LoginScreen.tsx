import React, { useState } from 'react';
import styled from 'styled-components/native';
import useAuthStore from '../../../hooks/useAuth';

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

const Input = styled.TextInput`
  width: 100%;
  padding: 8px;
  border-color: ${(props) => props.theme.colors.border};
  border-width: 1px;
  margin-bottom: 16px;
  font-size: 16px;
`;

const Button = styled.Button``;

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [username, setUsername] = useState('');
  const { login, isAuthenticated } = useAuthStore();

  const handleLogin = async () => {
    await login(username); // Login with username (use token or other method as needed)
    if (isAuthenticated) {
      navigation.navigate('Home'); // Navigate to HomeScreen after login
    }
  };

  return (
    <Container>
      <Title>Login</Title>
      <Input
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Login" onPress={handleLogin} />
    </Container>
  );
};


export default LoginScreen;
