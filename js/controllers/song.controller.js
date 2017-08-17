angular
.module('wdiRadio')
.controller('SongIndexController', [
  'Song',
  SongIndexControllerFunction
])
.controller('SongShowController', [
  '$stateParams',
  'Song',
  SongShowControllerFunction
])
.controller('SongNewController', [
  '$state',
  'Song',
  SongNewControllerFunction
])
function SongIndexControllerFunction (Song) {
  this.songs = Song.query()
}
function SongShowControllerFunction ($stateParams, Song) {
  this.song = Song.get({ id: $stateParams.id })
}
function SongNewControllerFunction ($state, Song) {
  this.song = new Song()

  this.create = function () {
    this.song.$save(() => {
      $state.go('songIndex')
    })
  }
}
