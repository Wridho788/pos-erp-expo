import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.primaryMain};
  padding: 10px 20px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

const ButtonWithText: React.FC<{ text: string; onPress: () => void }> = ({ text, onPress }) => {
  return (
    <Button onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}

export default ButtonWithText;
