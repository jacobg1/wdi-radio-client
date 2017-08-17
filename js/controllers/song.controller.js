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
.controller('SongEditController', [
  '$state',
  'Song',
  SongEditControllerFunction
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
function SongEditControllerFunction ($state, Song) {
  this.song = Song.get({id: $state.params.id})

  this.edit = function () {
    this.song.$update({id: $state.params.id}, (song) => {
      $state.go('songShow', {id: song.id})
    })
  }
  this.delete = function () {
    this.song.$delete({id: $state.params.id}, (song) => {
      $state.go('songIndex')
    })
  }
}
