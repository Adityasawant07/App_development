import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Goa College of Engineering</Text>
      <Text style={styles.subtitle}>
        Welcome! Explore different courses here.
      </Text>

      <View style={styles.banner}>
        <Text style={styles.bannerText}>Learn Something New!</Text>
      </View>

      <Text style={styles.sectionTitle}>Available Courses</Text>

      <View style={styles.card}>
        <View style={styles.cardText}>
          <Text style={styles.courseTitle}>Computer Engineering</Text>
          <Text style={styles.description}>
            Learn programming and software.
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardText}>
          <Text style={styles.courseTitle}>Information Technology and Engineering</Text>
          <Text style={styles.description}>
            Learn about how computers and networks work together.
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardText}>
          <Text style={styles.courseTitle}>Electronics and Telecommunication</Text>
          <Text style={styles.description}>
            Learn about circuits and devices.
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardText}>
          <Text style={styles.courseTitle}>Mechanical Engineering</Text>
          <Text styles={styles.description}>Here we go again  </Text>
        </View>
      </View>
      <View style={styles.tip}>
        <Text style={styles.tipTitle}>COMPLETE</Text>
        <Text style={styles.description}>

        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 15,
  },
  subtitle: {
    fontSize: 15,
    color: '#666666',
    marginTop: 8,
    marginBottom: 20,
  },
  banner: {
    backgroundColor: '#63fff7',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 25,
  },
  bannerText: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333333',
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },
  cardText: {
    marginLeft: 15,
    flex: 1,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
    lineHeight: 20,
  },
  tip: {
    backgroundColor: '#FFF0C2',
    padding: 18,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 30,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8A6500',
    marginBottom: 5,
  },
});
