import { Lesson } from "@/types/types";

export const dummyLesson: Lesson = {
  id: "js-arrays-101",
  title: "Introduction to JavaScript Arrays",
  lessonBody: [
    {
      id: "block-1",
      type: "text",
      content:
        "Arrays in JavaScript are ordered collections that can hold multiple values of any type. They are defined using square brackets [] and can contain numbers, strings, objects, or even other arrays. Let's start by learning how to create and access arrays.",
    },
    {
      id: "block-2",
      type: "executable",
      content:
        "// Create an array called 'fruits' containing three strings: 'apple', 'banana', and 'orange'\nlet fruits = ",
      answer: "['apple', 'banana', 'orange']",
    },
    {
      id: "block-3",
      type: "text",
      content:
        "Arrays in JavaScript are zero-indexed, meaning the first element is at position 0. We can access elements using square bracket notation [index]. We can also find out how many elements are in an array using the .length property.",
    },
    {
      id: "block-4",
      type: "executable",
      content:
        "// Given the array: let numbers = [10, 20, 30, 40, 50]\n// Write code to access the third element (30)\nnumbers[",
      answer: "2]",
    },
    {
      id: "block-5",
      type: "text",
      content:
        "Arrays come with many built-in methods. One of the most common operations is adding elements to an array. We can use .push() to add elements to the end of an array, and .unshift() to add elements to the beginning.",
    },
    {
      id: "block-6",
      type: "executable",
      content:
        "// Add the number 60 to the end of this array\nlet nums = [10, 20, 30, 40, 50];\nnums.",
      answer: "push(60)",
    },
    {
      id: "block-7",
      type: "text",
      content:
        "Arrays can be modified using various methods. The .pop() method removes the last element, while .shift() removes the first element. We can also use .splice() to add or remove elements at any position.",
    },
    {
      id: "block-8",
      type: "executable",
      content:
        "// Remove the last element from this array\nlet scores = [85, 90, 95, 100];\nscores.",
      answer: "pop()",
    },
    {
      id: "block-9",
      type: "text",
      content:
        "One powerful feature of JavaScript arrays is the ability to iterate over them using methods like .forEach(), .map(), .filter(), and .reduce(). These methods allow us to perform operations on each element of the array.",
    },
    {
      id: "block-10",
      type: "executable",
      content:
        "// Use the map method to multiply each number by 2\nlet numbers = [1, 2, 3, 4, 5];\nnumbers.map(num => ",
      answer: "num * 2",
    },
  ],
};
