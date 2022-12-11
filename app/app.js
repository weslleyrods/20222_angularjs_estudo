
const myFirstApp = angular.module('myFirstApp',[])//[] é um array de dependências

myFirstApp.config(()=>{

    //todo código que será disparado antes de iniciar a aplicação

})

myFirstApp.run(()=>{

    //todo código que seŕa dispara quando a aplicação iniciar
})

myFirstApp.controller