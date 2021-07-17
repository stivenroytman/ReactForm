import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Butoon } from 'react-native';

export default function App() {
  const serverInfo = {
    host: '127.0.0.1',
    port: '8080'
  };
  const [userdata, setUserdata] = React.useState({});
  const postData = async () => {
    const response = await fetch(`http://${serverInfo.host}:${serverInfo.port}`)
    const response_text = await response.text()
    setUserdata({
      name: response_text
    });
  }
  return (
    <>
      <TextInput
        placeholder="Enter your name"
        onChangeText={text => setUserdata({ name: text })}
        onSubmitEditing={postData}
      />
      <Text>Hello, {userdata.name}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
