const map = new Map([
    [{country : 'United States'}, 'USD'], //key can be anything
    ['India', 'Rupee'],
    [false , 'Rupee'], //we can even use bolean value 
]);
console.log(map)



const user = {
    name : 'adan'
}

const map1 = new Map([[user,{age : 22}]]);
console.log(map1.get(user))

//Object (just for demonstration)
const CURRENCY_MAP = {
    'united states' : 'USD',
    Pakistan : 'Rupee',
}


// in Map when we loop it will loop in order, which is not in the case of object according to Kayle
// also it is harder to map a object see below after map3 see map 4
const map3 = new Map([
    [1, 'A'],
    [2, 'B'],
    [3, 'C'],
    [4, 'D'],
])


map3.forEach((value,key) => console.log(value,key))

const obj = {
    1 : 'A',
    2 : 'B',
    3 : 'C',
    4  : 'D',
}



Object.entries(obj).forEach(([key,value]) => {
    console.log(key,value)
})




//map also have size property
console.log(map3.size)



const map4 = new Map([
    [1, 'A'],
    [2, 'B'],
    [3, 'C'],
    [4, 'D'],
])

map4.set(2,'eden') //map method

console.log(map4.get(2)) //these are methods of maps

console.log(map4.has(4)) // if 4 exist in map

map4.delete(1);

console.log(map4)


let obj2 = {
    name : 'adan'
    
}


const map5 = new Map([
    [1, {id : 1, name : 'adan', description : 'desc'}],
    [2, {id : 2, name : 'ali', description : 'desc'}],
    [3, {id : 3, name : 'raja', description : 'desc'}],
]);


function getItem(id){
    
   return map5.get(id)

}

console.log(getItem(1))