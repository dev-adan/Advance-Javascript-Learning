const data = {
    name : 'adan',
    age : 22,
    address : {
        street : '123 main st',
    },

    sayHi(){
        console.log('say hi')
    },
    // sayHi : 'lalala'
}


function printStreet(data){
    if (data && data.address && data.address.street){
        // console.log(data.address.street)
    }

    if(data?.address?.street){
        // console.log(data.address.street)
    }

    data?.sayHi?.()
    data?.sayHi()
}

printStreet(data) 