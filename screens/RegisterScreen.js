import React, { useState } from "react";
import { StatusBar } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StyleSheet, View } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import { auth } from "../firebase";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  // This works on ios

  //   useLayoutEffect(() => {
  //     navigation.setOptions({
  //       headerBackTitle: "Back",
  //     });
  //   }, [navigation]);

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL:
            imgUrl ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        });
      })
      .catch((err) => alert(err));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text
        h3
        style={{
          marginBottom: 50,
          marginLeft: 4,
          fontSize: 17,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Create a signal account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile picture Url(Optional)"
          type="text"
          value={imgUrl}
          onChangeText={(text) => setImgUrl(text)}
          onSubmitEditing={register}
        />
      </View>
      <Button
        containerStyle={styles.button}
        raised
        onPress={register}
        title="Register"
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  button: {
    width: 200,
  },
  inputContainer: {
    width: 300,
  },
});
