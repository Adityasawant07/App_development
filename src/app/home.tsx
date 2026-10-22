import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Home!</Text>
      <Text style={styles.text}>
        Your registration was successful.
      </Text>
      <Text style={styles.text}>
        Welcome to Goa College of Engineering.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F3F4F6',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#24baff',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});