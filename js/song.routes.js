angular
.module('wdiRadio')
.config([
  '$stateProvider',
  // '$urlRouterProvider',
  Router
])

function Router ($stateProvider) {
  $stateProvider
    .state('songIndex', {
      url: '/songs',
      controller: 'SongIndexController',
      controllerAs: 'vm',
      templateUrl: 'js/ng-views/index.html'
    })
    .state('songShow', {
      url: '/songs/:id',
      controller: 'SongShowController',
      controllerAs: 'vm',
      templateUrl: 'js/ng-views/show.html'
    })
}
