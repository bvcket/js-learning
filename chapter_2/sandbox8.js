let age = 25;

// loose comparison (diff types can still be equal)

console.log(age == 25);
console.log(age == '25');
console.log(age != 25);
console.log(age != '25');

// strict comparison (different types cannot be equal)

console.log(age === 25);
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25');