angular
.module('wdiRadio')
.controller('SongIndexController', [
  'Song',
  SongIndexControllerFunction
])
.controller('SongShowController', [
  'Song',
  '$stateParams',
  SongShowControllerFunction
])

function SongIndexControllerFunction (Song) {
  this.songs = Song.query()
}
function SongShowControllerFunction (Song, $stateParams) {
  this.song = Song.get({ id: $stateParams.id })
}
