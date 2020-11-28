import React, { useState } from "react";
import { View, TouchableOpacity, TextInput, Text } from "react-native";
import { styles } from "../theme/styles";
import {
  useAppDispatch,
  useAppState,
  login,
  signup,
} from "../context/appContext";
export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading } = useAppState();
  const appDispatch = useAppDispatch();

  const handleSignup = () => {
    signup(appDispatch, email, password);
  };
  const handleSignin = () => {
    login(appDispatch, email, password);
  };
  return (
    <View style={{ paddingHorizontal: 10, paddingTop: 10, flex: 1 }}>
      <Text style={styles.headerText}>Giriş Yap</Text>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        style={styles.textInput}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Şifre"
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.textInput}
        autoCapitalize="none"
      />
      <TouchableOpacity
        disabled={loading}
        style={loading?styles.buttonDisabled:styles.button}
        onPress={() => handleSignin()}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#FFF",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Giriş Yap
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={loading}
        style={loading?styles.buttonDisabled:styles.button}
        onPress={() => handleSignup()}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#FFF",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          Kayıt Ol
        </Text>
      </TouchableOpacity>
    </View>
  );
}
