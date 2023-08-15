import * as React from 'react';
import { WebView } from 'react-native-webview';


export default function App() {
  return (
    <WebView
    
      source={{ uri: 'https://bit.ly/3OTf5D3' }}
    />
  );
}








/*import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, Text, View } from "react-native";
import { openBrowserAsync } from "expo-web-browser";
export default function App() {
  return (
    <View style={styles.container}>
      <Button title="get start" onPress={() => openBrowserAsync("https://ethiomp.vercel.app")}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
*/
