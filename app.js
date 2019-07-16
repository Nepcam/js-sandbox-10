// const sayHello = function() {
//   console.log('Hello')
// }

// const sayHello = () => {
//   console.log('Hello')
// }

// One line function using => does not need braces
// const sayHello = () => console.log('Hello');

// One line returns
// const sayHello = () => 'Hello';

// Same as above
// const sayHello = function() {
//   return 'Hello';
// }

// Return object
// const sayHello = () => ({ msg: 'Hello'});

// Single parameters does not need ()
// const sayHello = name => console.log(`Hello ${name}`);

// Multiple parameters need ()
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);


// sayHello('Cam', 'Nepe');

const users = ['Mason', 'Darius', 'Liam'];

// const nameLengths = users.map(function(name) {
//   return name.length;
// });

// Shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// });

// Shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths)