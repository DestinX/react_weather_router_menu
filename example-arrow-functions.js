var names = ['andrew', 'julie', 'johan', 'fredrik'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Johannes'));

// var person = {
//   name: 'Johannes',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hello to ' + name)
//     });
//   }
// };
//
// person.greet();

function add(a, b) {
  return a+b;
}

// addStatement = multiple lines
var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(4,7));

// addExpression = en line
var addExpression = (a,b) => a+b;
console.log(addExpression(3,-2));

// console.log(add(1,3));
// console.log(add(5,4));
