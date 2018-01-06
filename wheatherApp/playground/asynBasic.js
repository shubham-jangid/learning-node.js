console.log("first line executed");


setTimeout(() => {
    console.log('Inside of callback');
}, 2000);

console.log("third line run");