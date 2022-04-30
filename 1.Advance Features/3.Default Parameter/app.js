function greet(firstName, lastName, salutation = 'hello', fullName= `${firstName} ${lastName}`){

    console.log(firstName,lastName,salutation)
    console.log(fullName,salutation)
} //its good to put default parameters on end rather then at front.

greet('adan','ali') // output: adan ali hello
greet('adan','ali',undefined) // output: adan ali hello
greet('adan','ali',null) //output : adan ali null

function greet1(firstName, lastName, {salutation = 'hello', suffix = 'Mr'} ={}){ //destructuring salutation and 
    //suffix from object , here its empty but down we are passing it

    console.log(salutation,suffix,firstName,lastName)

}

greet1('adan','ali',{salutation : 'hola', suffix : 'mister'}) //we can pass object as well 