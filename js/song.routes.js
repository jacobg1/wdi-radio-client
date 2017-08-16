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
  // $urlRouterProvider.otherwise('/songs')
}
