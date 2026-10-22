import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { addStudent } from '../database/database';

export default function HomeScreen() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [course, setCourse] = useState('IT');
  const [dob, setDob] = useState('');
  const [year, setYear] = useState(1);
  const [accepted, setAccepted] = useState(false);

  const showMessage = (title: string, message: string) => {
    if (Platform.OS === 'web') {
      window.alert(`${title}\n\n${message}`);
    } else {
      Alert.alert(title, message);
    }
  };

  const handleSubmit = async () => {
    console.log('Submit Registration button pressed');
    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !dob.trim()
    ) {
      showMessage(
        'Missing Details',
        'Please fill in your name, email, phone number, and date of birth.'
      );
      return;
    }
    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      showMessage(
        'Invalid Email',
        'Please enter a valid email address.'
      );
      return;
    }
    if (!/^\d{10}$/.test(phone.replace(/[\s+-]/g, ''))) {
      showMessage(
        'Invalid Phone Number',
        'Please enter a valid 10-digit phone number.'
      );
      return;
    }
    if (!gender) {
      showMessage(
        'Select Gender',
        'Please select your gender.'
      );
      return;
    }

    if (!accepted) {
      showMessage(
        'Declaration Required',
        'Please accept the declaration before submitting.'
      );
      return;
    }

    try {
      await addStudent({
        name: name.trim(),
        email: email.trim(),
        phone: phone.replace(/[\s+-]/g, ''),
        gender,
        course,
        dob: dob.trim(),
        year,
      });
    } catch (error) {
      console.error('Registration failed:', error);
      showMessage(
        'Registration Failed',
        'The student could not be saved. Please try again.'
      );
      return;
    }

    // Registration successful
    const successMessage =
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Gender: ${gender}\n` +
      `Course: ${course}\n` +
      `Date of Birth: ${dob}\n` +
      `Year: ${year}`;

    if (Platform.OS === 'web') {
      window.alert(
        'Registration Successful!\n\n' +
        'Your registration has been completed.\n\n' +
        successMessage
      );

      router.replace('/home');
    } else {
      Alert.alert(
        'Registration Successful',
        successMessage,
        [
          {
            text: 'Continue',
            onPress: () => router.replace('/home'),
          },
        ]
      );
    }
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.header}>
        <Text style={styles.heading}>
          Student Registration
        </Text>

        <Text style={styles.subtitle}>
          Fill in your details below
        </Text>
      </View>

      <View style={styles.card}>
        {/* Full Name */}
        <Text style={styles.label}>Full Name</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />

        {/* Email */}
        <Text style={styles.label}>Email Address</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Phone */}
        <Text style={styles.label}>Phone Number</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your 10-digit phone number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          maxLength={10}
        />

        {/* Date of Birth */}
        <Text style={styles.label}>Date of Birth</Text>

        <TextInput
          style={styles.input}
          placeholder="DD/MM/YYYY"
          value={dob}
          onChangeText={setDob}
          maxLength={10}
        />

        {/* Gender */}
        <Text style={styles.label}>Gender</Text>

        <View style={styles.radioRow}>
          {['Male', 'Female', 'Other'].map((item) => (
            <Pressable
              key={item}
              style={styles.radioOption}
              onPress={() => setGender(item)}
            >
              <View style={styles.radioCircle}>
                {gender === item && (
                  <View style={styles.radioSelected} />
                )}
              </View>

              <Text>{item}</Text>
            </Pressable>
          ))}
        </View>

        {/* Course */}
        <Text style={styles.label}>Select Course</Text>

        <View style={styles.pickerBox}>
          <Picker
            selectedValue={course}
            onValueChange={(value) => setCourse(value)}
          >
            <Picker.Item
              label="Information Technology"
              value="IT"
            />

            <Picker.Item
              label="Computer Science"
              value="CS"
            />

            <Picker.Item
              label="Electronics"
              value="EC"
            />

            <Picker.Item
              label="Mechanical"
              value="ME"
            />
          </Picker>
        </View>

        {/* Year of Study */}
        <Text style={styles.label}>
          Year of Study: {year}
        </Text>

        <View style={styles.sliderRow}>
          {[1, 2, 3, 4].map((item) => (
            <Pressable
              key={item}
              style={[
                styles.yearButton,
                year === item && styles.yearButtonActive,
              ]}
              onPress={() => setYear(item)}
            >
              <Text
                style={[
                  styles.yearText,
                  year === item && styles.yearTextActive,
                ]}
              >
                {item}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Declaration */}
        <Pressable
          style={styles.checkRow}
          onPress={() => setAccepted(!accepted)}
        >
          <View style={styles.checkbox}>
            {accepted && (
              <Text style={styles.checkMark}>✓</Text>
            )}
          </View>

          <Text style={styles.checkText}>
            I confirm that the details provided are correct.
          </Text>
        </Pressable>

        {/* Submit Button */}
        <Pressable
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitText}>
            Submit Registration
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },

  content: {
    padding: 18,
    paddingBottom: 30,
    width: '100%',
    maxWidth: 650,
    alignSelf: 'center',
  },

  header: {
    backgroundColor: '#4e4edb',
    padding: 22,
    borderRadius: 16,
    marginBottom: 18,
    marginTop: 10,
  },

  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    color: '#efeef8',
    textAlign: 'center',
    marginTop: 8,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 16,
    elevation: 3,
  },

  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#131313',
    marginBottom: 8,
    marginTop: 14,
  },

  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 9,
    padding: 12,
    fontSize: 15,
    backgroundColor: '#FFFFFF',
  },

  radioRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 18,
    paddingVertical: 8,
  },

  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },

  radioCircle: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#514ae8',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  radioSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#2f78d2',
  },

  pickerBox: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 9,
    overflow: 'hidden',
  },

  sliderRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 5,
  },

  yearButton: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: '#6C63FF',
    borderRadius: 8,
    alignItems: 'center',
  },

  yearButtonActive: {
    backgroundColor: '#6C63FF',
  },

  yearText: {
    color: '#6C63FF',
    fontWeight: 'bold',
  },

  yearTextActive: {
    color: '#FFFFFF',
  },

  checkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 22,
    gap: 10,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: '#6C63FF',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkMark: {
    color: '#6C63FF',
    fontWeight: 'bold',
  },

  checkText: {
    flex: 1,
    color: '#444444',
    fontSize: 13,
  },

  submitButton: {
    backgroundColor: '#6C63FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 24,
  },

  submitText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});