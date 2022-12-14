
const myFirstApp = angular.module('myFirstApp',['ngRoute'])//[] é um array de dependências

//todo código que será disparado antes de iniciar a aplicação
myFirstApp.config(['$routeProvider', ($routeProvider)=>{

    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
        })
        .when('/directory', {
            templateUrl: 'views/directory.html',
            controller: 'MyFirstAppController'
        })
        .otherwise({
            redirectTo: '/home'
        });
    }
])

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