import {Add} from './day252.mjs';

//global scope
let y= 'global';
console.log('value of y in global scope: ' + y);


//block scope
function myfun(){
    const y= 'functional';
    console.log('value of y in functional scope: ' + y);
    if (true) {
        const y= 'block';
        console.log('value of y in block scope: ' + y);
        
    }
};
myfun();


//lexical scoping
function newfn(){
    console.log('value of y in lexical scoping: ' + y);
    
}

newfn();


//console.log(typeof Add)
let z= [1,2,3,4,5]
console.log(Add(...z));