// function getTempCallback(location, callback) {
//   callback(undefined, 10);
//   callback('city not found');
// }
//
// getTempCallback('stockholm', function(err, temp) {
//   if (err) {
//     console.log('failed: ', err);
//   } else {
//     console.log('sucess: ', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(12);
//       reject('error dude city not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('stockholm').then(function(temp) {
//   console.log('promise sucess: ', temp);
// }, function(err) {
//   console.log('promise error: ', err);
// })
//
// if(typeof 5 === 'num') {}

function addPromise (a, b) {
  return new Promise(
    function(resolve, reject) {
      if(typeof a === 'number' && typeof b === 'number')
        resolve(a+b);
      else
        reject('A eller B är inte ett nummer');
    }
  );
}

addPromise(15, 6).then(
  function(sum) {
    console.log('promise sucess: ', sum);
  },
  function(err) {
    console.log('promise failed: ', err);
  }
)

addPromise(15, 'BRO').then(
  function(sum) {
    console.log('promise sucess: ', sum);
  },
  function(err) {
    console.log('promise failed: ', err);
  }
)
