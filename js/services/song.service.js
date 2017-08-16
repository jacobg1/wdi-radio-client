angular
.module('wdiRadio')
.factory('Song', [
  '$resource',
  Song
])

function Song ($resource) {
  return $resource('http://localhost:3000/songs/:id', {}, {
    update: { method: 'PUT' }
  })
}
