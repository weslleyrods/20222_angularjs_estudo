
const myFirstApp = angular.module('myFirstApp',['ngRoute'])//[] é um array de dependências

//todo código que será disparado antes de iniciar a aplicação
myFirstApp.config(['$routeProvider',   '$locationProvider',  function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('')

    $routeProvider
        .when('/home', {
            templateUrl: '/views/home.html',
            controller: 'MyFirstAppController'
        })
        .when('/directory', {
            templateUrl: '/views/directory.html',
            controller: 'MyFirstAppController'
        }).otherwise({
            templateUrl: '/views/home.html',
    })
}])

myFirstApp.run(function(){
    //todo código que seŕa dispara quando a aplicação iniciar
})

myFirstApp.controller('MyFirstAppController', ['$scope',function($scope){
    //todo código que será disparado quando o controller for chamado

    $scope.adicionarNome = function(){
        $scope.nomes.push({
            nome: $scope.novoNome.nome,
            cinto: $scope.novoNome.cinto,
            preco: parseInt($scope.novoNome.preco),
            disponivel: true,
        })
        $scope.novoNome.nome = ""
        $scope.novoNome.cinto = ""
        $scope.novoNome.preco = ""
    }

    $scope.removerNome = function(nome){
        const nomeRemovido = $scope.nomes.indexOf(nome)
        $scope.nomes.splice(nomeRemovido, 1)
    }

    $scope.nomes = [
        {
        nome: "João",
        cinto: "preto",
        preco: 100,
        disponivel: true,
        thumb: "/content/img/joao.jpeg"
    },
    {
        nome: "Maria",
        cinto: "branco",
        preco: 50,
        disponivel: true,
        thumb: "/content/img/maria.jpeg"
    },
    {
        nome: "José",
        cinto: "azul",
        preco: 80,
        disponivel: true,
        thumb: "/content/img/jose.jpeg"
    }]
    
}]) 