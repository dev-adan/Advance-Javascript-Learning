function namee(firstName = 'not given', lastName){
    lastName = lastName ?? 'not given'
    return `${firstName} ${lastName}`
};

console.log(namee('adan',null))  

console.log(undefined ?? (true && (true || false)))

//?? this operator is used for only this purpose, also notice that 
//around 90% of browsers supports this 
