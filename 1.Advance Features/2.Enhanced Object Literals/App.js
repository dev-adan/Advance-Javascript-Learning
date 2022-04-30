const name = 'adan';
const firstName = 'ali'
const age = 22;

const countr = 'Pakistan'

//javascript introduced this shorthand technique for object 
const person = {
    name,
    firstName,
    age,
    
    sayHi(){
        console.log('hi')
    },

    //replacing the name
    country : countr,

    //we can write any custom javascript code as long as it computes to a single value
    [`age${age < 20 ? age : name}`]  : age,

}

console.log(person)