export const evaluateAnswer = (answer: any, expected: any): boolean => {
  console.log(answer, expected);

  // Check if both are arrays
  if (Array.isArray(answer) && Array.isArray(expected)) {
    // Check if lengths are the same
    if (answer.length !== expected.length) return false;

    // Check each element
    for (let i = 0; i < answer.length; i++) {
      if (!evaluateAnswer(answer[i], expected[i])) return false; // Recursive check
    }
    return true; // Arrays are equal
  }

  // Check if both are objects
  if (
    typeof answer === "object" &&
    answer !== null &&
    typeof expected === "object" &&
    expected !== null
  ) {
    const answerKeys = Object.keys(answer);
    const expectedKeys = Object.keys(expected);

    // Check if number of keys is the same
    if (answerKeys.length !== expectedKeys.length) return false;

    // Check each key
    for (const key of answerKeys) {
      if (!expectedKeys.includes(key) || !evaluateAnswer(answer[key], expected[key])) return false; // Recursive check
    }
    return true; // Objects are equal
  }

  // Fallback for primitive types
  return answer == expected; // Use == for type coercion
};
