import './shim';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import sampleCode from '@/services/symbol';
import { Configuration, NodeRoutesApi } from '@/services/NodeClientService';

export default function App() {
  useEffect(() => {
    // Run sample code
    sampleCode();

    // Create Node Client Sample
    const config = new Configuration({ basePath: 'https://symbolnode.blockchain-authn.app:3001' });
    const nodeClient = new NodeRoutesApi(config);
    nodeClient
      .getNodeHealth()
      .then((e) => console.log(e))
      .catch(() => console.log('node unhealthy'));
  }, []);

  return (
    <View style={styles.container}>
      <Text>symbol-sdk-expo-sample</Text>
      <StatusBar style='auto' />
    </View>
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
