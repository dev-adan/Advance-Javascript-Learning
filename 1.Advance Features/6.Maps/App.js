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

