
const myFirstApp = angular.module('myFirstApp',[])//[] é um array de dependências

myFirstApp.config(()=>{

    //todo código que será disparado antes de iniciar a aplicação

})

myFirstApp.run(()=>{

    //todo código que seŕa dispara quando a aplicação iniciar
})

myFirstApp.controller('MyFirstAppController', ['$scope',($scope)=>{
    //todo código que será disparado quando o controller for chamado

    $scope.message= "Olá Mundo!"
    $scope.nomes = [
        {
        nome: "João",
        cinto: "Preto",
        preco: 100
    },
    {
        nome: "Maria",
        cinto: "Branco",
        preco: 50
    },
    {
        nome: "José",
        cinto: "Azul",
        preco: 80
    }]
    
}]) 