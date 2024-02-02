//https://youtu.be/xUI5Tsl2JpY?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&t=1880
// callbacks & foreach

const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
};

// myFunc(function(value){
//     // do something
//     console.log(value);
// });

//in arrow form:
myFunc(value => console.log(value));

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
