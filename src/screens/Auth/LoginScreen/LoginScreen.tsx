import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import styled from 'styled-components/native';
const LoginScreen: React.FC = ({ navigation }: any) => {

  return (
    <Container>
      <StyledText>Login Screen</StyledText>
      <Button title="Go to Register" onPress={() => navigation.navigate('Register')} />
    </Container>
  );
}


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.neutral10};
  padding: ${(props) => props.theme.spacing.padding}px;
`;

const StyledText = styled.Text`
  font-family: ${(props) => props.theme.typography.fonts.bold};
  font-size: ${(props) => props.theme.typography.fontSizes.heading};
  color: ${(props) => props.theme.colors.primaryMain};
`;

export default LoginScreen;
