const uniqueList =  [1,2,3,4,5];
const newNumber = 4;

//set guarantees that every element in it will be unique
const set = new Set([6,1,2,3,4,5,5,5,5]); //it will remove all the dublicated for us

if(!uniqueList.includes(newNumber)){
    uniqueList.add(newNumber)
};

set.add(5); //it will not add because its arleady in the list
console.log(set)
console.log(uniqueList)

//in set we cannot access anything by index like set[0] we have to use has
console.log(set.has(2));

set.forEach(value => {
    console.log(value)
})

//thats how we delete value is et
set.delete(6);

console.log(set.size)
set.clear()
console.log(set)

//removing duplicates from set

function removeDup(array){
    return [...new Set(array)]
}

console.log(removeDup([1,1,2,2,3,3,4,5,5]))