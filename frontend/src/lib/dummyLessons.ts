import { Lesson } from "@/types/types";

export const dummyLessons: Lesson[] = [
  {
    id: "js-arrays-101",
    title: "Introduction to JavaScript Arrays",
    lessonBody: [
      {
        id: "block-1",
        type: "text",
        content:
          "Arrays in JavaScript are ordered collections that can hold multiple values of any type. They are defined using square brackets [] and can contain numbers, strings, objects, or even other arrays. Let's start by learning how to create and access arrays.",
        state: "current",
      },
      {
        id: "block-2",
        type: "executable",
        content:
          "Create an array called 'fruits' containing three strings: 'apple', 'banana', and 'orange'\nlet fruits = ",
        answer: ["apple", "banana", "orange"],
        state: "current",
      },
      {
        id: "block-3",
        type: "text",
        content:
          "Arrays in JavaScript are zero-indexed, meaning the first element is at position 0. We can access elements using square bracket notation [index]. We can also find out how many elements are in an array using the .length property.",
        state: "future",
      },
      {
        id: "block-4",
        type: "executable",
        content:
          "Given the array: let numbers = [10, 20, 30, 40, 50]\nWrite code to access the third element (30)\nnumbers[",
        answer: [30],
        state: "future",
      },
      {
        id: "block-5",
        type: "text",
        content:
          "Arrays come with many built-in methods. One of the most common operations is adding elements to an array. We can use .push() to add elements to the end of an array, and .unshift() to add elements to the beginning.",
        state: "future",
      },
      {
        id: "block-6",
        type: "executable",
        content:
          "Add the number 60 to the end of this array\nlet nums = [10, 20, 30, 40, 50];\nnums.",
        answer: [10, 20, 30, 40, 50, 60],
        state: "future",
      },
      {
        id: "block-7",
        type: "text",
        content:
          "Arrays can be modified using various methods. The .pop() method removes the last element, while .shift() removes the first element. We can also use .splice() to add or remove elements at any position.",
        state: "future",
      },
      {
        id: "block-8",
        type: "executable",
        content:
          "Remove the last element from this array\nlet scores = [85, 90, 95, 100];\nscores.",
        answer: [85, 90, 95],
        state: "future",
      },
      {
        id: "block-9",
        type: "text",
        content:
          "One powerful feature of JavaScript arrays is the ability to iterate over them using methods like .forEach(), .map(), .filter(), and .reduce(). These methods allow us to perform operations on each element of the array.",
        state: "future",
      },
      {
        id: "block-10",
        type: "executable",
        content:
          "Use the map method to multiply each number by 2\nlet numbers = [1, 2, 3, 4, 5];\nnumbers.map(num => ",
        answer: [2, 4, 6, 8, 10],
        state: "future",
      },
    ],
  },
  {
    id: "js-mapping-101",
    title: "Introduction to JavaScript Mapping Function",
    lessonBody: [
      {
        id: "block-1",
        type: "text",
        content:
          "The map() function is a built-in method in JavaScript that creates a new array populated with the results of calling a provided function on every element in the calling array.",
        state: "future",
      },
      {
        id: "block-2",
        type: "executable",
        content:
          "Given an array of numbers, use map to create a new array with each number squared.\nlet numbers = [1, 2, 3, 4];\nlet squares = numbers.map(num => ",
        answer: [1, 4, 9, 16],
        state: "future",
      },
      {
        id: "block-3",
        type: "text",
        content:
          "The map() method does not execute the function for empty elements. It is important to remember that map() returns a new array and does not modify the original array.",
        state: "future",
      },
      {
        id: "block-4",
        type: "executable",
        content:
          "Use map to convert an array of strings to uppercase.\nlet fruits = ['apple', 'banana', 'cherry'];\nlet upperFruits = fruits.map(fruit => ",
        answer: ["APPLE", "BANANA", "CHERRY"],
        state: "future",
      },
      {
        id: "block-5",
        type: "text",
        content:
          "You can also use map() to extract specific properties from an array of objects. This is particularly useful when working with arrays of data.",
        state: "future",
      },
      {
        id: "block-6",
        type: "executable",
        content:
          "Given an array of objects, use map to create an array of names.\nlet users = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];\nlet names = users.map(user => ",
        answer: ["Alice", "Bob", "Charlie"],
        state: "future",
      },
      {
        id: "block-7",
        type: "text",
        content:
          "The map() method can also be chained with other array methods like filter() and reduce() to perform complex operations on arrays.",
        state: "future",
      },
      {
        id: "block-8",
        type: "executable",
        content:
          "Use map to add 10 to each number in the array.\nlet numbers = [5, 10, 15];\nlet increased = numbers.map(num => ",
        answer: [15, 20, 25],
        state: "future",
      },
      {
        id: "block-9",
        type: "text",
        content:
          "When using map(), the function can take up to three arguments: the current element, the index of the current element, and the array map was called upon.",
        state: "future",
      },
      {
        id: "block-10",
        type: "executable",
        content:
          "Use map to create an array of objects with the original number and its square.\nlet numbers = [1, 2, 3];\nlet numberObjects = numbers.map(num => ({ number: num, square: ",
        answer: [
          { number: 1, square: 1 },
          { number: 2, square: 4 },
          { number: 3, square: 9 },
        ],
        state: "future",
      },
    ],
  },
];
