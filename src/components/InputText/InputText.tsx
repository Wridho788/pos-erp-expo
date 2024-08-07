import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput as PaperInput, IconButton } from 'react-native-paper';
import { useTheme } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Pastikan Anda menginstal vector-icons

interface InputTextProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  isPassword?: boolean;
}

const InputText: React.FC<InputTextProps> = ({ value, onChangeText, placeholder, isPassword }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const { colors } = useTheme();

  return (
    <View style={{ position: 'relative' }}>
      <PaperInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={isPassword ? !showPassword : false}
        style={{
          backgroundColor: '#FFFFFF', // Background putih
          borderColor: isFocused ? colors.primaryPressed : colors.neutral70, // Warna border berdasarkan fokus
          borderWidth: 1,
          borderRadius: 4,
          marginVertical: 4,
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        right={isPassword ? (
          <PaperInput.Icon
            icon={({ size, color }) => (
              <Icon
                name={showPassword ? 'eye-off' : 'eye'}
                size={size}
                color={color}
                onPress={() => setShowPassword(!showPassword)}
              />
            )}
          />
        ) : null}
      />
    </View>
  );
};

export default InputText;
