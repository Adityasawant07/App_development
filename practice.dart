import 'dart:io';

void main() {
  print("Enter a number:");
  int n = int.parse(stdin.readLineSync()!);

  for (int i = n; i >= 1; i--) {
    print(i);
  }
}
import 'dart:io';

void main() {
  print("Enter number of elements:");
  int n = int.parse(stdin.readLineSync()!);

  List<int> numbers = [];

  for (int i = 0; i < n; i++) {
    print("Enter number:");
    numbers.add(int.parse(stdin.readLineSync()!));
  }

  int largest = numbers[0];

  for (int i = 1; i < n; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  print("Largest number: $largest");
}
import 'dart:io';

void main() {
  print("Enter number of elements:");
  int n = int.parse(stdin.readLineSync()!);

  int even = 0;
  int odd = 0;

  for (int i = 0; i < n; i++) {
    print("Enter number:");
    int num = int.parse(stdin.readLineSync()!);

    if (num % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }

  print("Even numbers: $even");
  print("Odd numbers: $odd");
}
import 'dart:io';

void main() {
  print("Enter a number:");
  int n = int.parse(stdin.readLineSync()!);

  for (int i = 1; i <= 10; i++) {
    print("$n x $i = ${n * i}");
  }
}
import 'dart:io';

void main() {
  Map<String, int> marks = {};

  print("Enter number of students:");
  int n = int.parse(stdin.readLineSync()!);

  for (int i = 0; i < n; i++) {
    print("Enter student name:");
    String name = stdin.readLineSync()!;

    print("Enter marks:");
    int mark = int.parse(stdin.readLineSync()!);

    marks[name] = mark;
  }

  print("Student Results:");

  marks.forEach((name, mark) {
    print("$name : $mark");
  });
}
import 'dart:io';

void main() {
  try {
    print("Enter numerator:");
    int a = int.parse(stdin.readLineSync()!);

    print("Enter denominator:");
    int b = int.parse(stdin.readLineSync()!);

    int result = a ~/ b;

    print("Result: $result");
  } catch (e) {
    print("Cannot divide by zero");
  }
}
import 'dart:io';

class Rectangle {
  double length;
  double breadth;

  Rectangle(this.length, this.breadth);

  double area() {
    return length * breadth;
  }

  double perimeter() {
    return 2 * (length + breadth);
  }
}

void main() {
  print("Enter length:");
  double l = double.parse(stdin.readLineSync()!);

  print("Enter breadth:");
  double b = double.parse(stdin.readLineSync()!);

  Rectangle r = Rectangle(l, b);

  print("Area: ${r.area()}");
  print("Perimeter: ${r.perimeter()}");
}
import 'dart:io';

void main() {
  print("Enter a string:");
  String str = stdin.readLineSync()!;

  Map<String, int> frequency = {};

  for (int i = 0; i < str.length; i++) {
    String ch = str[i];

    if (frequency.containsKey(ch)) {
      frequency[ch] = frequency[ch]! + 1;
    } else {
      frequency[ch] = 1;
    }
  }

  print("Frequency of each character:");

  frequency.forEach((ch, count) {
    print("$ch : $count");
  });
}