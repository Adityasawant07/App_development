import { useEffect } from 'react';
import { initializeDatabase } from '../database/database';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
   useEffect(() => {
    initializeDatabase().catch((error) => {
      console.error('Database initialization failed:', error);
    });
  }, []);
  return (
    <Drawer
      initialRouteName="index"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#6c67c5',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerActiveTintColor: '#6C63FF',
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: 'Student Registration',
          drawerLabel: 'Registration',
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="person-add-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="home"
        options={{
          title: 'Home',
          drawerLabel: 'Home',
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="explore"
        options={{
          title: 'Goa College of Engineering',
          drawerLabel: 'Explore',
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="compass-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
  name="students"
  options={{
    title: 'Registered Students',
    drawerLabel: 'Student Records',
  }}
/>
      <Drawer.Screen
        name="profile"
        options={{
          title: 'Profile',
          drawerLabel: 'Profile',
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="person-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Drawer>
  );
}