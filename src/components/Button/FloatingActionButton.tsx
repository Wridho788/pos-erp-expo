// components/FloatingActionButton.tsx

import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { useTheme } from 'styled-components/native';

interface FloatingActionButtonProps {
  icon: any;
  onPress: () => void;
}

const FABContainer = styled(TouchableOpacity)<{ themeColor: string }>`
  position: absolute;
  bottom: 20px;  // Adjust the distance from the bottom
  right: 20px;   // Adjust the distance from the right
  width: 60px;
  height: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  background-color: ${({ themeColor }) => themeColor};
`;

const FABIcon = styled.Image`
  width: 30px;
  height: 30px;
`;

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ icon, onPress }) => {
  const theme = useTheme();

  return (
    <FABContainer onPress={onPress} themeColor={theme.colors.primaryMain}>
      <FABIcon source={icon} />
    </FABContainer>
  );
};

export default FloatingActionButton;
