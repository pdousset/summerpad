// const request = require('request')
// console.log('soy primero')
// request('https://wikipedia.com', function(){
// console.log('Ya se todo de wikipedia')
// request('https://google.com', function(){
// console.log('Ya se todo de google')
//  })
// })

// console.log('soy el ultimo')


//const promesa = require('request-promise')

//
//promesa('http://wikipedia.com').then(function(html){

//    console.log('ya se todo de wikipedia')

//}).catch(function(err){

//    console.log(err)

//})

//const request = require('request')

//function llamada(url){
//    return new Promise(function(resolve,reject){
//        request(url, function(err, response){
//            if(err){
//                reject(err)
//            }else{
//                resolve(response)
//            }
//        })
//    })
//}

//llamada('http://wikipedia.com').then(function(response){
//    console.log(response)
//}).catch(function(err){
//    console.log(err)
//})

//let promesaA = new Promise((resolve, reject)=> setTimeout(resolve, 500, 'Hola soy la promesa A'))
//let promesaB = new Promise((resolve, reject)=> setTimeout(resolve, 800, 'Hola soy la promesa B'))
//let promesaC = Promise.reject()

//Promise.all([promesaA, promesaB, promesaC]).then(function(e){
//    console.log('termino todo',e)
//}).catch(function(err){
//    console.log('Todo mal')
//})

function PromesaA(){
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, 200, 'Pepe')
    })
}

function PromesaB(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, 1400, 'Mi nombre es '+nombre)
    } )
}

PromesaA().then(PromesaB).then(console.log)