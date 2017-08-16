angular
.module('wdiRadio')
.controller('SongIndexController', [
  'Song',
  SongIndexControllerFunction
])

function SongIndexControllerFunction (Song) {
  this.songs = Song.query()
}
