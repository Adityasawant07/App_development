import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { dbPromise } from '../database/database';

type Student = {
  id: number;
  name: string;
  email: string;
  phone: string;
  course: string;
  year: number;
};
export default function StudentsScreen() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    loadStudents();
  }, []);
  async function loadStudents() {
    try {
      const db = await dbPromise;

      const records = await db.getAllAsync<Student>(
        'SELECT id, name, email, phone, course, year FROM students ORDER BY id DESC'
      );
      setStudents(records);
    } catch (error) {
      console.error('Error retrieving students:', error);
    } finally {
      setLoading(false);
    }
  }
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Loading students...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registered Students</Text>

      {students.length === 0 ? (
        <Text style={styles.empty}>
          No students registered yet.
        </Text>
      ) : (
        <FlatList
          data={students}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>Email: {item.email}</Text>
              <Text>Phone: {item.phone}</Text>
              <Text>Course: {item.course}</Text>
              <Text>Year: {item.year}</Text>
              <Text style={styles.id}>Student ID: {item.id}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f4ff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6c63c7',
    marginBottom: 20,
  },
  empty: {
    fontSize: 16,
    color: '#fa0e0e',
    textAlign: 'center',
    marginTop: 30,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dedcf5',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6c63c7',
    marginBottom: 8,
  },
  id: {
    marginTop: 6,
    color: '#666',
    fontSize: 12,
  },
});