type Student = {
  id: number;
  name: string;
  email: string;
  phone: string;
  gender: string;
  course: string;
  dob: string;
  year: number;
};

const storageKey = 'aditya.students';

function readStudents(): Student[] {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const savedStudents = window.localStorage.getItem(storageKey);
    return savedStudents ? (JSON.parse(savedStudents) as Student[]) : [];
  } catch (error) {
    console.error('Unable to read saved students:', error);
    return [];
  }
}

function writeStudents(students: Student[]) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(storageKey, JSON.stringify(students));
  }
}

export const dbPromise = Promise.resolve({
  getAllAsync: async <T>(): Promise<T[]> => {
    return readStudents() as T[];
  },
});

export async function initializeDatabase() {}

export async function addStudent(student: Omit<Student, 'id'>) {
  const students = readStudents();
  const nextId = students.reduce((highestId, item) => {
    return Math.max(highestId, item.id);
  }, 0) + 1;

  writeStudents([...students, { ...student, id: nextId }]);
}
