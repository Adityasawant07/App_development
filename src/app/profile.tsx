import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>:D</Text>
      <Text style={styles.title}>My Profile</Text>
      <Text style={styles.subtitle}>
        Aditya Sawant
      </Text>
      <Text style={styles.description}>
        Dept: ITE
      </Text>
      <Text>Roll number: 25-IT-006</Text>
    </View>
  );
}

const styles = StyleSheet.create(                                                                                                                                       {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    padding: 20,
  },
  icon: {
    fontSize: 65,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2563EB',
  },
  subtitle: {
    fontSize: 17,
    marginTop: 12,
    color: '#444444',
  },
  description: {
    fontSize: 15,
    marginTop: 10,
    color: '#666666',
    textAlign: 'center',
  },
});
