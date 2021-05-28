const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log('Welcome!')

reader.question('enter a password?', (password)=>{
    if (password.length >= 10){
    console.log('Your password is valid');
    } else{
        console.error('Your password is not valid');
    }
    reader.close();
});
