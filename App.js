import { StatusBar, Image, StyleSheet, Text, View } from 'react-native';


import Inicio from './Inicio';
import Fim from './Fim';

export default function App() {
  return (
    <View style={styles.container}>
        <View>
      <Inicio>

      </Inicio>

      <Fim>

      </Fim>
    </View>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#079404',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
