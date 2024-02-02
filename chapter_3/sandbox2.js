// while loops
const names = ['shaun', 'mario', 'luigi'];
// let i = 0;

// while (i < 5){
//     console.log('in loop: ', i);
//     i++;
// }

let i = 0;
while(i < names.length){
    let html = `<div>${names[i]}</div>`;
    console.log(html);
    i++;
}