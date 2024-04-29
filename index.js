#! /usr/bin/env node 
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "Sentance",
        type: "input",
        message: "Enter your message",
    }
]);
let words = answer.Sentance.trim().split(" ");
// trim() using for removing whitespace and split() using for making array 
console.log(words); // print the array using a split for making an array 
console.log(`In the message your words are ${words.length}`); // count the length of the Sentence
