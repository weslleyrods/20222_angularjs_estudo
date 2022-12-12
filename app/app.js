
const myFirstApp = angular.module('myFirstApp',[])//[] é um array de dependências

myFirstApp.config(()=>{

    //todo código que será disparado antes de iniciar a aplicação

})

myFirstApp.run(()=>{

    //todo código que seŕa dispara quando a aplicação iniciar
})

myFirstApp.controller('MyFirstAppController', ['$scope',($scope)=>{
    //todo código que será disparado quando o controller for chamado

    $scope.removerNome = (nome)=>{
        const nomeRemovido =    $scope.nomes.indexOf(nome)
        $scope.nomes.splice(nomeRemovido, 1)
    }
    $scope.nomes = [
        {
        nome: "João",
        cinto: "black",
        preco: 100,
        disponivel: true
    },
    {
        nome: "Maria",
        cinto: "white",
        preco: 50,
        disponivel: false
    },
    {
        nome: "José",
        cinto: "blue",
        preco: 80,
        disponivel: true
    }]
    
}]) 