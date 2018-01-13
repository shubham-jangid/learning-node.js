const utils = require('./utils.js');
const expect = require('expect');

it('should add two no', () => {
  var res = utils.add(10, 20);
  expect(res)
    .toBe(30)
    .toBeA('number');
});

// it('should be quare', () => {
//   var squ = utils.square(5);
//   if (squ !== 10) {
//     throw Error(` expected 10 but got ${squ}`);
//   }
// });

it('should be square', () => {
  var squ = utils.square(3);
  expect(squ)
    .toBe(9)
    .toBeA('number');
});

it('should expect some values', () => {
  expect({ name: 'shubham' }).toNotEqual({ name: 'Shubham' });
  //expect([2, 3, 5]).toNotInclude([2]);
});

it('should expect some values', () => {
  expect({
    name: 'shubham',
    age: 20,
    address: 'India Delhi'
  }).toInclude({ age: 21 });
});
