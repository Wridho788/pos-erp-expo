import React, { useState } from "react";
import { Container, Card, Title, Subtitle } from "./style";
import ButtonWithText from "../../../components/Button/ButtonWithText";
import InputText from "../../../components/InputText/InputText";
import { useAuthStore } from "../../../store/store"; // Import store auth dari zustand
const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthStore(); // Ambil fungsi login dari zustand store

  const handleLogin = () => {
    // Logika login - misalnya, jika email dan password tidak kosong
    if (username && password) {
      // Simulasi login dan menyimpan token
      login("dummy-token"); // Ganti dengan token yang sesuai
    } else {
      // Tampilkan pesan error jika perlu
      alert("Please enter both email and password");
    }
  };

  return (
    <Container>
      <Card>
        <Title>Welcome</Title>
        <Subtitle>Login below to access your account</Subtitle>
        <InputText
          placeholder="Enter username"
          value={username}
          onChangeText={setUsername}
        />

        <InputText
          isPassword={true} // Menandakan input adalah password
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
        />

        <ButtonWithText text="Sign in" onPress={handleLogin} />
      </Card>
    </Container>
  );
};

export default LoginScreen;
