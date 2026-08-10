// Problme 01

function studentIntroduction(student) {
  // Write your code here
  if (
    typeof student !== "object" ||
    Array.isArray(student) ||
    student.name === undefined ||
    student.age === undefined ||
    student.course === undefined
  ) {
    return "Invalid";
  }

  const { name, age, course } = student;

  if (
    typeof name !== "string" ||
    typeof age !== "number" ||
    typeof course !== "string" ||
    !name ||
    Number.isNaN(age) ||
    age < 0 ||
    !course
  ) {
    return "Invalid";
  }

  return `My name is ${name}. I am ${age} years old. I am learning ${course}.`;
}

// Problem 02

function filterActiveUsers(users) {
  // Write your code here
  if (!Array.isArray(users) || users.length === 0) {
    return "Invalid";
  }

  const isValidUser = users.every(
    (user) =>
      typeof user === "object" &&
      !Array.isArray(user) &&
      typeof user.isActive === "boolean" &&
      user !== null,
  );

  if (!isValidUser) {
    return "Invalid";
  }

  const filteredUsers = users.filter((user) => user.isActive === true);

  return filteredUsers;
}

// Problem 03

function countHashtags(caption) {
  // Write your code here…

  if (typeof caption !== "string") {
    return "Invalid";
  }

  const wordCount = caption.split(" ");

  const hashTagWords = wordCount.filter((word) => word.startsWith("#"));

  const hashTagWordsWithoutHash = hashTagWords.map((word) => word.slice(1));

  const longestHashTag = hashTagWordsWithoutHash.reduce(
    (accumulator, current) =>
      current.length > accumulator.length ? current : accumulator,
    "",
  );

  const result = {
    hashtagCount: hashTagWordsWithoutHash.length,
    longestTag: longestHashTag,
  };

  return result;
}

// Problem 04

function bonusScore(scores) {
  // Write your code here

  if (!Array.isArray(scores) || scores.length === 0) {
    return "Invalid";
  }

  const isNumber = scores.every(
    (score) => typeof score === "number" && !Number.isNaN(score),
  );

  if (!isNumber) {
    return "Invalid";
  }

  const updatedScores = scores.map((score) => score + 10);

  const totalScores = updatedScores.reduce(
    (accumulator, current) => accumulator + current,
  );

  return totalScores;
}

// Problem 05

function generateLeaderboard(students) {
  if (!Array.isArray(students || student.length === 0)) {
    return "Invalid";
  }

  const isValidStudent = students.every(
    (student) =>
    typeof student === "object" &&
    student !== null &&
    !Array.isArray(student) &&
    typeof student.name === "string" &&
    student.name.trim() !== "" &&
    typeof student.score === "number" &&
    !Number.isNaN(student.score)
    );

  if (!isValidStudent) {
    return "Invalid";
  }

  const qualified = students.filter((student) => student.score >= 70);

  const names = qualified.map(({ name }) => name.toUpperCase());

  return names.slice(0, 3);
}
