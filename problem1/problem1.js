const mixer = [1,3,"hh",7,"jj","i",5,2,9]
const numbers = mixer.filter(item => typeof(item) === 'number');
const strings = mixer.filter(item => typeof(item) === 'string');
// console.log('string', strings );
// console.log('number', numbers );

// -------------- another solve pr

const mixer2 = [1,3,"hh",7,"jj","i",5,2,9];

let number = [];
let string = [];

mixer2.forEach((ele)=>{
    if(typeof ele === "number"){
        number.push(ele)
    }
    else{
        string.push(ele)
    }
})

// console.log("numbers",number)
// console.log("string",string)