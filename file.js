'use strict';

const fs = require('fs');
const readline = require('readline');


const data = fs.readFileSync('./cities.csv', 'utf8');

const array =[];


const addToArray=(data)=>{
  const lines = data.split('\n');
  for(let line of lines){
    const elements = line.split(',');
    array.push(elements);
  }
  return array;
}

const addToObject=()=>{
  let objectArray = [];
for(let i =0; i <array.length;i++){
const cityInfo ={
  City:array[i][0],
  Population:array[i][1],
  Area:array[i][2],
  Destiny:array[i][3],
  Country:array[i][4],
}
objectArray.push(cityInfo);
}
objectArray.shift();
return objectArray;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

addToArray(data);
console.log('==================================================');
console.table(addToObject());


rl.question('Введите данные про город через запятую: ', (info) => {
fs.appendFileSync("./cities.csv", `\n${info}`);
  rl.close();
});
