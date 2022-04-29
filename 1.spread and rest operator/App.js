const num = [2,3,4,7]
//spread operator will take every number after ist one because we already
//provided that patameter (multiplayer)

function sum(multiplayer,...numbers){
    console.log('number',numbers) // output: number (4) [2, 3, 4, 7]
    return multiplayer *  numbers.reduce((sum,number) => sum  + number,0)
}

console.log(sum(10,2,3,4,7)) 
console.log(sum(10,...num)) //we can also do like  this , it is like saying num[0],num[1],num[2]

//most used case
const newArray =[...num] //it will create copy of a num and create a new array

//note (concept for vannila js): there is a difference between nodelist and array, though they look the 
//same but keep that in your mind... if you have nodeList then with spread operator you can convert it into 
//new array like this [...divs]

const [a,b,...rest] = num;        //a  //b       //rest
console.log(a,b,rest)      //output 2   3     (2) [4, 7]

/// //////////////////////////////// OBJECTS ///////////////////////////////////////////////////////////////////

//we can do the same with objects as well
const obj = {id : 1, name : 'adan', lastname : 'ali', country : 'pakistan'};
const {id,name,...rest1} = obj;
console.log(id,name,rest1)  //output 1 'adan' {lastname: 'ali', country: 'pakistan'}

//--
const newObject = {...obj, continent : 'asia'};
console.log(newObject) //{id: 1, name: 'adan', lastname: 'ali', country: 'pakistan', continent: 'asia'}
//combining multiple objects
const mergedObject = {...obj, ...newObject};
console.log(mergedObject)