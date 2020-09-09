"use strict";
exports.__esModule = true;
// Generic Function
function identity(arg) {
    return arg;
}
var number = identity(5);
console.log("number", typeof number);
var string = identity("5");
console.log("string", typeof string);
var string1 = identity("5");
console.log("string1", typeof string1);
// // Generic Constraints
// function display<T extends Person>(input: T): T {
//   console.log(`My name is ${input.name}`);
//   return;
// }
//
// const person: Person = {
//   skills: ["nunchucks", "ninja programmer", "react, node, angular, php, webstorm, vscode"],
//   age: 47,
//   name: "Bryan"
// };
//
// const employee: Employee = {
//   skills: [],
//   age: 36,
//   name: "Jeff",
//   hourlyRate: 17.50,
//   title: "destroyer of worlds"
// };
//
// const animal: Animal = {
//   family: "Vombatidae",
//   deathCount: 16,
//   age: 6
// }
// display(person);
//
// display(employee);
//
// // display(animal); // Error
// // Generic Class
// class ControllerDto<T> implements BaseDto<T> {
//   constructor(
//     readonly success: boolean = false,
//     readonly data?: T,
//     readonly message?: string,
//     readonly code?: number // parameter property
//   ) {}
// }
//
// const creditData: CreditData = {
//   company: "test company",
//   activity: ["test", "activity1", "activity2"]
// };
//
// const userData: UserData = {
//   firstName: "test firstName",
//   lastName: "test lastName"
// };
//
// const example1 = new ControllerDto<CreditData>(
//   true,
//   creditData
// );
// console.log("example1", example1);
//
// const example2 = new ControllerDto<CreditData>(
//   false,
//   undefined, //per TS documentation, pass optional params as undefined if not used
//   "Credit records not available",
//   961
// )
// console.log("example2", example2);
//
// const example3 = new ControllerDto<UserData>(
//   true,
//   userData
// );
// console.log("example3", example3);
//
// const example4 = new ControllerDto<UserData>(
//   false,
//   undefined, //per TS documentation, pass optional params as undefined if not used
//   "User record not available",
//   963
// );
// console.log("example4", example4);
