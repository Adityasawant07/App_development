import * as SQLite from 'expo-sqlite';
export const dbPromise = SQLite.openDatabaseAsync('students.db').then(
  async (db) => {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        gender TEXT NOT NULL,
        course TEXT NOT NULL,
        dob TEXT NOT NULL,
        year INTEGER NOT NULL
      );
    `);
    return db;
  }
);
export async function initializeDatabase() {
  await dbPromise;
}
export async function addStudent(student: {
  name: string;
  email: string;
  phone: string;
  gender: string;
  course: string;
  dob: string;
  year: number;
}) {
  const db = await dbPromise;

  await db.runAsync(
    `INSERT INTO students (name, email, phone, gender, course, dob, year)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    student.name,
    student.email,
    student.phone,
    student.gender,
    student.course,
    student.dob,
    student.year
  );
}